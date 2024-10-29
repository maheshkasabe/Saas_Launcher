import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request){
    const { planId, planName } = await req.json();

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
            success_url: `https://localhost:3000/success?planName=${encodeURIComponent(planName)}`,
            cancel_url: `https://localhost:3000/cancel`,
        });
        return NextResponse.json({ sessionId: session.id });

    } catch (error) {
        return NextResponse.json({ error });
    }
}