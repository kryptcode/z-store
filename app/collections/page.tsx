import Navbar from '@/components/ui/navbar'
import Link from 'next/link'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const Collections = () => {
  return (
    <div className="bg-white text-black h-screen">
        <Navbar />
        <div className='text-center flex justify-center items-center space-x-1 h-[6vh] bg-[#f4f4f4] text-sm font-light '>
            <Link href={'/'}>Home</Link> / <span className='opacity-50'>Collections</span>
        </div>
    </div>
  )
}

export default Collections