import heli from "../public/heli.svg"

const Body = () => {
  return (
    
    <div className='flex justify-center items-center font-mono'>
        
        <div className='flex flex-col py-40 items-center border-1 shadow-lg rounded-lg m-5 h-svh w-full bg-gray-100'>
            <img alt="heli" src="/heli.svg" width={60} height={60} />
            <h1 className='text-center text-5xl font-bold'>Launch your SAAS by weekend</h1>
            <p className='text-center m-10'>The Next.js Startup Boilerplate for busy founders,
            <br/>with all you need to build and launch your startup soon.</p>
            
            {/* <div>
                <p className='text-left m-5'>Ethereum, Cosmos, BSC, or EVM Address: </p> 
                <p className='text-left m-5' >Earnifi supports all chains that have large airdrops. <u className='cursor-pointer'>See the full list here</u></p>
            </div> */}
{/* 
            <input className='text-center w-2/3 h-10 border-[#5D3FD3] border-2 rounded m-5 text-xl' type="text" placeholder="0x123... or yourname.eth" /> */}
            <button className='w-1/6 h-10 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> Get Started </button>


        </div>

    </div>
  )
}

export default Body