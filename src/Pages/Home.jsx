import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Link } from 'react-router-dom'

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
        <Link to= "/cats"> <button className='bg-navbarColor text-white p-2 rounded-xl hover:font-bold'>Get to the Breeds Page</button></Link>
        </div>   
    </div>
    </>
  )
}
