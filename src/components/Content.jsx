import "../../public/Pro.webp"

const Content = ({ plan}) => {
  return (
    <div className="w-full">
        {plan === 'Free' && 
            <div className='flex flex-col items-center justify-center m-10'>
                 <p className='text-m '>Your subscription is currently in {plan} Plan. You can upgrade to a paid plan by clicking <a  className="text-blue-500 underline" href="/pricing"> here. </a> </p>
                <h1 className='text-2xl p-2'>Here are your Biolerplates</h1>
                <div className='flex flex-col items-center justify-center m-10'>
                <img src='Free.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>
            </div>
            </div>      
        }
        {plan === 'Pro' && 
            <div className='flex flex-col items-center justify-center m-10'>
                 <p className='text-m '>Your subscription is currently in {plan} Plan. You can upgrade to a paid plan by clicking <a  className="text-blue-500 underline" href="/pricing"> here. </a> </p>
                 <h1 className='text-2xl p-2'>Here are your Biolerplates</h1>
            <div className='flex flex-col items-center justify-center m-10'>
                <img src='Free.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>

                 <img src='Pro.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>
                
            </div>

            </div>      
        }
        {plan === 'Plus' && 
            <div className='flex flex-col items-center justify-center m-10'>
                <p className='text-m '>Your subscription is currently in {plan} Plan. You can upgrade to a paid plan by clicking <a  className="text-blue-500 underline" href="/pricing"> here. </a> </p>
                <h1 className='text-2xl p-2'>Here are your Biolerplates</h1>

            <div className='flex flex-col items-center justify-center m-10'>

                <img src='Free.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>

                 <img src='Pro.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>

                <img src='Plus.webp' alt='' className='w-auto h-96 border-2' />
                <button className='w-1/2 m-5 text-white rounded-full border-2 border-[#5D3FD3] bg-[#5D3FD3] hover:bg-white hover:text-[#5D3FD3] hover:shadow-lg'> <a href='https://github.com/maheshkasabe/Saas_Launcher/archive/main.zip'> Download Now </a> </button>
            </div>

            </div>      
        }

    </div>
  )
}

export default Content