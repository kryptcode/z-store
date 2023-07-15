import Navbar from '@/components/ui/navbar'
import Link from 'next/link'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const Wishlist = () => {
  return (
    <div className="bg-white text-black h-screen">
      <Navbar />
      <div className='text-center flex justify-center items-center space-x-1 h-[6vh] bg-[#f4f4f4] text-sm font-light '>
        <Link href={'/'}>Home</Link> / <span className='opacity-50'>Wishlist</span>
      </div>
      <div className='h-[82vh] flex flex-col justify-center items-center'>
            <div className='text-4xl shadow-xl mb-5 h-20 w-20 flex justify-center items-center rounded-full'>
                <BiUserCircle className='font-thin' />
            </div>
            <h3 className='text-2xl font-medium mb-3'>
                Please Sign in
            </h3>
            <p className='mb-6'>
            Sign In to view items in your wishlist
            </p>
            <button className='py-1.5 px-8 rounded-md bg-gradient-to-r from-[#8d2ce2] to-[#4b01e0] text-white text-lg font-medium hover:scale-105 transition-all duration-300 ease-in-out'>
            Sign in
        </button>
      </div>
    </div>
  )
}

export default Wishlist