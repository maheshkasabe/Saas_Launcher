
const Body = () => {
  return (
    
    <div className='flex justify-center items-center font-mono'>
        
        <div className='flex flex-col py-40 items-center border-1 shadow-lg rounded-lg m-5 h-svh w-5/6 bg-gray-100'>
            
            <h1 className='text-center text-5xl font-bold mt-20'>Launch your SAAS by weekend</h1>
            <p className='text-center m-10'>Earnifi finds <b>$786</b> on average per person in airdrops and NFTs.</p>
            
            <div>
                <p className='text-left m-5'>Ethereum, Cosmos, BSC, or EVM Address: </p> 
                <p className='text-left m-5' >Earnifi supports all chains that have large airdrops. <u className='cursor-pointer'>See the full list here</u></p>
            </div>

            <input className='text-center w-2/3 h-10 border-[#5D3FD3] border-2 rounded m-5 text-xl' type="text" placeholder="0x123... or yourname.eth" />
            <button className='w-1/6 h-10 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> Check My Wallet </button>


        </div>

    </div>
  )
}

export default Body