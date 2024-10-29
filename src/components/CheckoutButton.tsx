"use client";
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QFCuHE9zdHlWOZmloxD4Ccz4SfnE1VQ04lkZxNQ7Ry06PS7hxBsi5LPzzXjRAE6VNbERprYwqtvizEqN8UkfJjr00Anc369lW");

interface CheckoutButtonProps {
    planAmount: number;
    planName: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ planAmount, planName }) => {
  const [loading, setLoading] = useState(false);
  
  const handleCheckout = async () => {
    setLoading(true);

    const response =  await fetch("https://localhost:3000/api/auth/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        planAmount,
        planName,
      }),
    });

    const data  = await response.json();
    console.log(data);

    const stripe = await stripePromise;
    if (data.sessionId) {
      await stripe!.redirectToCheckout({ sessionId: data.sessionId });
    } else {
      console.error("Session ID is missing in the response.");
    }

    setLoading(false);
  };

  return (
    <button className="rounded-lg text-xs pr-3 pl-3 pt-1 pb-1 mt-10 border-2" disabled={loading} onClick={handleCheckout}>
    {loading ? "Loading..." : `Get Started with ${planName}`}
  </button>
  )
}

export default CheckoutButton