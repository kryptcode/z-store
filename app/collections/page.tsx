"use client"
import Hero from '@/components/ui/collections/Hero'
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
    <div className="bg-white text-black  min-h-screen">
        <Navbar />
        <div className='text-center flex justify-center items-center space-x-1 h-[6vh] bg-[#f4f4f4] text-sm font-light '>
            <Link href={'/'}>Home</Link> / <span className='opacity-50'>Collections</span>
        </div>

        <div className=''>
            <Hero />
        </div>



    </div>
  )
}

export default Collections