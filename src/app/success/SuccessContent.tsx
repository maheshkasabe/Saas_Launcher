"use client";

import { useSession } from "next-auth/react";

interface SuccessContentProps {
  planName: string;
}

const SuccessContent = ({ planName }: SuccessContentProps) => {
  const { data: Session } = useSession();
  
  return (
    <div className="flex flex-col items-center justify-center border-2 rounded-xl m-5 shadow-lg h-svh">
      <h1 className="text-4xl m-10 font-bold text-blue-500">Subscription Successful!</h1>
      <p>Dear {!Session?.user?.name ? "User" : Session?.user?.name }, You have successfully subscribed to {planName} plan</p>
      <p>You will receive a confirmation email shortly.</p>
    </div>
  )
}

export default SuccessContent