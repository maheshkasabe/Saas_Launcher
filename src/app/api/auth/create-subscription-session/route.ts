import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request){
    const { planId, planName, email } = await req.json();

    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items:[
                {
                    price: planId,
                    quantity: 1,
                }
            ],
            mode: "subscription",
            success_url: `https://${process.env.NEXT_PUBLIC_APP_URL}/success?planName=${encodeURIComponent(planName)}`,
            cancel_url: `https://${process.env.NEXT_PUBLIC_APP_URL}`,
            metadata: {
                planName,
                email,
            },
        });
        return NextResponse.json({ sessionId: session.id });

    } catch (error) {
        return NextResponse.json({ error });
    }
}