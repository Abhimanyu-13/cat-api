import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function Profile() {
  const userName = localStorage.getItem('username')
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center items-center mt-6">
        <div className=" sm:text-sm items-center  px-8  py-4 shadow-2xl rounded-2xl justify-center border-2 w-[800px]">
          <div className='h-10 bg-blue-500 text-white text-xl py-1 font-semibold font-serif rounded-lg px-4 items-center'>
            Your Profile
          </div>
          <div className='inline-flex'>
            <div className='border-2 px-2 mt-2 justify-start rounded-xl inline-flex'>
              <div className="relative border-4 w-20 m-2 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s' alt='profile' />
              </div>
            </div>
            <p className='ml-4 text-2xl font-bold font-mono flex items-center'>
              {userName}
            </p>
          </div>
          <p className='mt-2 text-lg  font-medium'>
            Bringing knowledge to your fingertips with AI assistance
          </p>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center mt-8">
        <div className=" sm:text-sm items-center  px-8  py-4 shadow-2xl rounded-2xl justify-center border-2 w-[800px]">
          <p className='text-2xl  '>
            Basic Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <div className="mb-5">
              <p className="mb-0 text-base text-black">First Name </p>
              <input className="input disabled w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="text" value={userName} />
            </div>
            <div className="mb-5">
              <p className="mb-0 text-base text-black">Last Name </p>
              <input className="input w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-gray-500" type="text" value='Enter your Last Name' />
            </div>
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Email </p>
            <input className="input w-full disabled h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="email"  value="name@mail.com" />
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Phone </p>
            <input className="input disabled font-medium w-64 h-[49px] rounded-md border border-gray6 px-6 text-lg text-black" type="text"  value="+xxxxxxxxxx" />
          </div>
          <div className="mb-5">
            <p className="mb-0 text-base text-black">Bio </p>
            <input className="input  w-full h-[49px] rounded-md border border-gray6 px-6 text-base text-black" type="text"  value="Hi There, This is my BIO " />
          </div>
          <div className='flex justify-end'>
              <Link to="/logout" className="bg-blue-600 border-2 justify-end text-white px-6 py-2 rounded-lg hover:bg-blue-700" >
                Logout
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}
