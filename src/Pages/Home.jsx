import React from 'react'
import { Navbar } from '../Components/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar />
    <div className=' h-1/3  border-1 shadow-lg items-center font-bold mt-4 flex justify-center'>
      <h1 className='text-[40px] '>What do you want to see ?</h1>
    </div>
    <div className='h-2/3 mt-4 items-center grid shadow-lg grid-cols-2 justify-between'>
    <div>
      <h1 className='flex justify-center'>
        Cats
      </h1>
      </div>  
      <div className='flex justify-center'>
        Dogs
        </div>  
    </div>
    </>
  )
}
