"use client";
import Image from 'next/image'
import Link from 'next/link'
import Authpage from './Authpage'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full bg-white shadow-lg px-10 py-5">
      {/* Logo Section with Fixed Width */}
        <div>
            <Image src="./heli.svg" alt="logo" width={34} height={34} />
        </div>

        <div className='flex flex-row justify-=between items-center font-sans'>
            <ul className='flex flex-row justify-center items-center'>
                <li className='px-10 text-[#5D3FD3] font-semibold hover:font-bold text-lg cursor-pointer'> <Link href={"/"}> Home </Link></li>
                <li className='px-10 font-semibold hover:font-bold cursor-pointer text-lg'><Link href="/docs"> Docs </Link></li>
                <li className='px-10 font-semibold hover:font-bold cursor-pointer text-lg'><Link href="/pricing"> Pricing </Link></li>
            </ul>

        </div>

        <div>
            <Authpage />
        </div>
        
    </div>
  )
}

export default Navbar