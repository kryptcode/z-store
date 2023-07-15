import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[12vh] flex justify-center items-center  '>
      <div className='w-[95%] mx-auto flex justify-between '>
        <div className='flex space-x-3 items-center'>
          <ShopIcon />
          <span className='text-black text-2xl font-medium'>
            tinka
          </span>
        </div>

        <div className='text-3xl flex space-x-6 items-center'>
          <Link href={'/wishlist'}>
          <AiOutlineHeart className='hover:scale-105 hover:text-[#4b01e0] cursor-pointer transition-all duration-300 ease-in-out' />
          </Link>
          <Link href={'/cart'}>
          <BsBag className='hover:scale-105 hover:text-[#4b01e0] cursor-pointer transition-all duration-300 ease-in-out' />
          </Link>
          <BiUserCircle className='hover:scale-105 hover:text-[#4b01e0] cursor-pointer transition-all duration-300 ease-in-out' />
        </div>
      </div>
    </div>
  )
}

export default Navbar


function ShopIcon() {
  return (
    <svg
    width="40"
    height="40"
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon"
  >
    <rect width="240" height="240" rx="44" fill="url(#paint0_linear_2_2)" />
    <path
      d="M134.415 78.2608L175.976 144.738C183.055 156.061 174.915 170.75 161.561 170.75H78.4386C65.0852 170.75 56.945 156.061 64.024 144.738L105.585 78.2608C112.244 67.6102 127.756 67.6102 134.415 78.2608Z"
      stroke="white"
      strokeWidth="14"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_2"
        x1="0"
        y1="120"
        x2="240"
        y2="120"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8E2DE2" />
        <stop offset="1" stopColor="#4A00E0" />
      </linearGradient>
    </defs>
  </svg>
  )
}