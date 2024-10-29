"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import "../app/globals.css";
import Image from "next/image";

const Authpage = () => {
  const { data: session } = useSession();
  return (
    <div>
        {
          !session ? (
              <button className='font-bold text-[#5D3FD3] rounded-full border-2 px-4 border-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white hover:shadow-lg' onClick={() => signIn("google")}>Sign in</button>
              ) : (
                <div className="flex flex-row">
                   <p className="text-m pr-5 font-bold">Hello, {session.user?.name}</p>
                   <button className='font-bold text-[#5D3FD3] rounded-full border-2 px-4 border-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white hover:shadow-lg' onClick={() => signOut()}>Sign out</button>
                </div>
              )
        }
    </div>
  )
}

export default Authpage