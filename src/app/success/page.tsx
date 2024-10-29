"use client";

import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: Session } = useSession();
  const searchParams = useSearchParams();
  const planName = searchParams.get("planName");
  
  return (
    <div>
        <p> Dear {Session?.user?.name}, You have successfully subscribed to {planName} plan</p>
    </div>
  )
}

export default page