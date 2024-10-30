"use client";

import Image from 'next/image'
import Link from 'next/link'
import Authpage from './Authpage'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full bg-white shadow-lg px-10 py-5 items-center'>
        <div>
            <Image src="./heli.svg" alt="logo" width={34} height={34} />
        </div>

        <div className='flex flex-row justify-between  items-center font-sans'>
            <ul className='flex flex-row justify-center'>
                <li className='px-10 text-[#5D3FD3] hover:font-bold cursor-pointer'> <Link href={"/"}> Home </Link></li>
                <li className='px-10 hover:font-bold cursor-pointer'><Link href="/about"> About </Link></li>
                <li className='px-10 hover:font-bold cursor-pointer'><Link href="/pricing"> Pricing </Link></li>
            </ul>
        </div>

        <div>
            <Authpage />
        </div>
           
    </div>
  )
}

export default Navbar