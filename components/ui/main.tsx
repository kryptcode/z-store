import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='h-[88vh] flex flex-col items-center justify-center space-y-5 '>
        <h2 className='text-3xl lg:text-7xl font-semibold'>Wear better, look better.</h2>
        <p>Don&apos;t you just love being in apparel?</p>
        <Link href={'/collections'}>
            <button className='py-1.5 px-8 rounded-md bg-gradient-to-r from-[#8d2ce2] to-[#4b01e0] text-white text-lg font-medium hover:scale-105 transition-all duration-300 ease-in-out'>
                Shop Now
            </button>
        </Link>
    </div>
  )
}

export default Main