import Image from "next/image";
import { useEffect, useState } from "react";

async function getProduct() {
    const url = 'https://fakestoreapi.com/products/1'



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

const Hero = () => {
    const [products, setProducts] = useState({})

    async function get() {
        const response = await getProduct()
        setProducts(response)
    }

    useEffect(() => {
        get()
    }, [])
  return (
    <div>
        <div className='w-[85%] mx-auto font-manRope h-[63vh] flex justify-between items-end   '>
            <div className="flex-1 px-7">
                <h2 className='text-5xl font-medium font-manRope mb-7 '>
                    {products.title}
                </h2>
                <p className="font-medium text-lg text-black/75 mb-5">
                    {products.description}.
                </p>
                <button className="py-1.5 px-5 border bg-gradient-to-r from-[#8d2ce2] to-[#4b01e0] text-white text-sm hover:scale-105 transition-all duration-300 ease-in-out">
                    SEE PRODUCT
                </button>
            </div>
            <div className="flex-1 flex justify-end items-end">
                <div className='w-96 h-96 relative'>
                    <Image src={products.image} alt='bag-img' objectFit="contain" fill={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero