'use client'

import Image from "next/image";
import { useState } from "react";

const CartModel = ()=>{


    const cartItems = true

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0
         flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="">
                    
                    CartIsEmpty
                </div>
            ) : (
                <>
                <h2 className="text-xl">Shopping Cart</h2>
                <div className=" flex flex-col gap-8">
                    {/**ITem */}
                    
                <div className="flex gap-4">
                    {/**Have items then its not emty */}
                    <Image 
                    src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    width={72}
                    height={96} 
                    className=" object-cover rounded-md"/>

                    <div className="flex flex-col justify-between w-full">
                        {/**Top */}
                        <div className="">
                        {/**TItle */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product name</h3>
                            <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                        </div>
                        {/**Desc */}
                        <div className="text-sm text-gray-500">
                            Available
                        </div>
                        </div>
                        {/**Bottom */}
                        <div className=" flex justify-between text-sm">
                            <span className=" text-gray-500">Qty</span>
                            <span className=" text-blue-500">remove</span>
                        </div>
                    </div>
                    
                 </div>

                      
                <div className="flex gap-4">
                    {/**Have items then its not emty */}
                    <Image 
                    src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    width={72}
                    height={96} 
                    className=" object-cover rounded-md"/>

                    <div className="flex flex-col justify-between w-full">
                        {/**Top */}
                        <div className="">
                        {/**TItle */}
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">Product name</h3>
                            <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                        </div>
                        {/**Desc */}
                        <div className="text-sm text-gray-500">
                            Available
                        </div>
                        </div>
                        {/**Bottom */}
                        <div className=" flex justify-between text-sm">
                            <span className=" text-gray-500">Qty</span>
                            <span className=" text-blue-500">remove</span>
                        </div>
                    </div>
                    
                 </div>
                </div>
                {/**Bottom */}
                <div className="">
                    <div className="flex items-center justify-between font-semibold">
                        <span className="">SubTotal</span>
                        <span className="">$49</span>
                    </div>
                    <p className=" text-gray-500 text-sm mt-2 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>

                    <div className=" flex justify-between text-sm">
                         <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                         <button className="rounded-md py-3 px-4 bg-black text-white ">CheckOut</button>
                    </div>
                </div>
                </> )}

        </div>
        
    )
}


export default CartModel;