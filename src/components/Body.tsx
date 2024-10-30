import Link from "next/link"
import heli from "../public/heli.svg"
import { redirect } from "next/navigation"
import { Reviews } from "@/constants"

const Body = () => {
  return (
    
    <div className='flex justify-center items-center'>
        
        <div className='flex flex-col py-40 items-center border-1 shadow-lg rounded-lg m-5 h-full w-full bg-gray-100'>
            <img alt="heli" src="/heli.svg" width={60} height={60} />
            <h1 className='text-center text-5xl font-bold'>Launch your SaaS by Weekend</h1>
            <p className='text-center m-10'>The Next.js Startup Boilerplate for busy founders,
            <br/>with all you need to build and launch your startup soon.</p>

            <button className='w-1/6 h-10 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <Link href="/pricing"> Get Started </Link> </button>
            <p className="text-center p-10 text-lg"> Built & ships with <u>Next.js,</u> <u>Tailwind,</u> <u>MongoDB,</u> <u>Stripe,</u> <u>Nextra</u> and <br/> <u> Typescript.</u> </p>

            <div className="flex flex-col items-center p-10 m-10 w-5/6 border-2 border-black rounded-2xl bg-black text-white">
              <div>
                <p className="text-center text-2xl p-2">What Our Users Say</p>
              </div>
              <div className="flex flex-row justify-center p-5">
                {
                  Reviews.map((review) => {
                    return (
                      <div className="flex flex-col justify-between items-center border-2 border-[#5D3FD3] m-5 p-5 rounded-xl w-1/3">
                        <p className="text-center">{review.comment}</p>
                        <div className="flex flex-row items-center justify-center w-full p-2 m-2">
                            <img src={review.avatar} alt="review avatar" className="w-8 h-8 m-2 rounded-full" />
                            {/* <p className="text-center">{review.name}</p> */}
                            <p className="text-center">{review.position}</p>
                        </div>
                      </div>
                    )
                  })
                } 
              </div>
            </div>

            <hr className="m-20 border-gray-400" style={{ width: "85%", height: "100%", color: "black" }} />
        </div>

    </div>
  )
}

export default Body