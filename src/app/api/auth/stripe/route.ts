// src/app/api/auth/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectMongo from '../../../../lib/mongoose';
import User from '../../../../models/User'; // Make sure the path and case match

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  await connectMongo();

  const buf = Buffer.from(await new Response(req.body).arrayBuffer());
  const sig = req.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig!, process.env.STRIPE_WEBHOOK_SECRET!);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        const email = session.metadata?.email;
        const planName = session.metadata?.planName;

        console.log(`Email: ${email}, Plan: ${planName}`);

        // Ensure that email and planName are available
        if (!email || !planName) {
          console.error("Missing email or planName in the session data.");
          return NextResponse.json({ error: 'Missing email or planName' }, { status: 400 });
        }

        // Debug: Log to ensure we have the right values
        console.log(`Updating subscription for email: ${email}, plan: ${planName}`);

        const user = await User.findOne({ email });
        if (user) {
          user.subscriptionStatus = 'subscribed';
          user.subscriptionPlan = planName;
          user.subscriptionExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Example: 30 days from now
          
          await user.save();

          console.log('User subscription updated successfully:', user);
        } else {
          console.error('User not found in database');
          return NextResponse.json({ error: 'User not found' }, { status: 404});
        }
      } catch (error) {
        console.error('Error updating user subscription in MongoDB:', error);
        return NextResponse.json({ error: 'Database update error' }, { status: 500 });
      }
    }
  } catch (err) {
    console.error(`Webhook error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    return NextResponse.json({ error: `Webhook error: ${err instanceof Error ? err.message : 'Unknown error'}` }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
