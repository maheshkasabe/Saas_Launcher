import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full bg-white shadow-lg px-10 py-5 items-center'>
        <div>
            <Image src="./heli.svg" alt="logo" width={34} height={34} />
        </div>

        <div className='flex flex-row justify-between font-sans'>
            <ul className='flex flex-row justify-center'>
                <li className='px-10 text-[#5D3FD3] hover:font-bold cursor-pointer'> <Link href={"/"}> Home </Link></li>
                <li className='px-10 hover:font-bold cursor-pointer'><Link href='/learn'> Learn </Link></li>
                <li className='px-10 hover:font-bold cursor-pointer'><Link href="/about"> About </Link></li>
                <li className='px-10 hover:font-bold cursor-pointer'><Link href="/pricing"> Pricing </Link></li>
            </ul>
        </div>
            
        <div>
            <button className='font-bold text-[#5D3FD3] rounded-full border-2 px-4 border-[#5D3FD3] hover:bg-[#5D3FD3] hover:text-white hover:shadow-lg'><Link href={"auth"}>SignUp</Link></button>
        </div>
    </div>
  )
}

export default Navbar