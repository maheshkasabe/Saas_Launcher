import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request){
    const { planAmount, planName} = await req.json();

    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items:[
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: planName,
                        },
                        unit_amount: planAmount * 100, 
                    },
                    quantity: 1,
                }
            ],
            mode: "payment",
            success_url: `https://${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: `https://${process.env.NEXT_PUBLIC_APP_URL}`,
        });
        return NextResponse.json({ sessionId: session.id });
        console.log(session);
    } catch (error) {
        return NextResponse.json({ error });
    }
}