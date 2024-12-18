"use client";
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

const stripePromise = loadStripe("pk_test_51QFCuHE9zdHlWOZmloxD4Ccz4SfnE1VQ04lkZxNQ7Ry06PS7hxBsi5LPzzXjRAE6VNbERprYwqtvizEqN8UkfJjr00Anc369lW");

interface SubscriptionButtonProps {
    planId: string;
    planName: string;
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({ planId, planName }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  
  const handleCheckout = async () => {
    if (!session?.user?.email) {
      console.error("User email is not available");
      alert("Please sign in first.");
      return; // Prevent proceeding if email is not available
    }
  
    setLoading(true);


    const response =  await fetch(`https://${process.env.NEXT_PUBLIC_APP_URL}/api/auth/create-subscription-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planId, planName, email: session?.user?.email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to create subscription session:", errorData.error);
      alert("Subscription failed. Please check your account.");
      setLoading(false);
      return; // Do not redirect if there was an error
    }

    const data  = await response.json();

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

export default SubscriptionButton