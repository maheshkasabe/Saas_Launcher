import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center p-10'>
        <p className="text-4xl text-red-500 m-20">Error: 404 Forbidden Request </p>
        <p> The page you are trying to access has restricted access.</p>
        <p>Please refer to your system admin.</p>
    </div>
  )
}

export default page