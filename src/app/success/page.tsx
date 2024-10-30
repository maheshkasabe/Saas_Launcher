"use client";

import { useSession } from "next-auth/react";

const page = () => {
  const { data: Session } = useSession();
  
  return (
    <div>
        <p> Dear {Session?.user?.name}, You have successfully subscribed to a plan</p>
    </div>
  )
}

export default page