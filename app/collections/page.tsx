"use client"
import Navbar from '@/components/ui/navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'


async function getCategories() {
    const url = 'https://fakestoreapi.com/products/categories'

    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {
                "Accept": "application/json",
            }
        })

        return response.json();
    } catch (error) {
        console.log(error)
    }
}


const Collections = () => {
    const [categories, setCategories] = useState([])

    async function get() {
        const response = await getCategories()
        setCategories(response)
    }

    useEffect(() => {
        get()
    }, [])
    
  return (
    <div className="bg-white text-black h-screen">
        <Navbar />
        <div className='text-center flex justify-center items-center space-x-1 h-[6vh] bg-[#f4f4f4] text-sm font-light '>
            <Link href={'/'}>Home</Link> / <span className='opacity-50'>Collections</span>
        </div>

        <div className='h-[82vh] w-full flex flex-wrap justify-center items-center space-x-6'>
            {
                categories.map((category: string, index) => (
                    <div key={index}>
                        <div className=''>
                            {category === 'electronics' ? (
                                <div className='w-[32rem] h-72 relative cursor-pointer '>
                                    <Image fill={true} objectFit='cover' className=' overflow-hidden rounded-2xl object-center' src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className='absolute text-2xl tracking-wide text-white bottom-10 font-medium right-5'>
                                        {category.toUpperCase()}
                                    </div>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-black/25'></div>
                                </div>
                            ) : category === 'jewelery' ? (
                                <div className='w-[32rem] h-72 relative '>
                                    <Image fill={true} objectFit='cover' className=' overflow-hidden rounded-2xl object-center' src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className='absolute text-2xl tracking-wide text-white bottom-10 font-medium right-5'>
                                        {category.toUpperCase()}
                                    </div>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-black/25'></div>
                                </div>
                            ) : category === "men's clothing" ? (
                                <div className='w-[32rem] h-72 relative '>
                                    <Image fill={true} objectFit='cover' className=' overflow-hidden rounded-2xl object-center' src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className='absolute text-2xl tracking-wide text-white bottom-10 font-medium right-5'>
                                        {category.toUpperCase()}
                                    </div>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-black/25'></div>
                                </div>
                            ) : (
                                <div className='w-[32rem] h-72 relative '>
                                    <Image fill={true} objectFit='cover' className=' overflow-hidden rounded-2xl object-center' src="https://images.pexels.com/photos/12264712/pexels-photo-12264712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className='absolute text-2xl tracking-wide text-white bottom-10 font-medium right-5'>
                                        {category.toUpperCase()}
                                    </div>
                                    <div className='absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-black/25'></div>
                                </div>
                            )
                        }
                        </div>
                    </div>
                ))
            }
        </div>



    </div>
  )
}

export default Collections