"use client"

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProducts = 
({productId,
  variants, 
  productoptions}:
{productId:string,
 variants:products.Variant[], 
 productoptions:products.ProductOption[]})=>{

    

 const [SelectedOptions, setSelectedOptions] = useState<{[key:string]: string,}>({});

 const [selectedVariant, setSelectedVariant] = useState<products.Variant>()


 useEffect(()=>{
    const variant = variants.find(v=>{
        const variantChoices = v.choices;
        if(!variantChoices) return false;
        return Object.entries(SelectedOptions).every(([key,value])=>variantChoices[key]===value
    )
    })
    setSelectedVariant(variant);
 },[SelectedOptions, variants])
 const handleOptionSelect =(optionType:string, choice:string)=>{
    setSelectedOptions((prev) =>({...prev, [optionType]: choice }))
 }


 
 const isVariantInStock =(choices:{[key:string]:string})=>{

    return variants.some((variant)=>{
        const variantChoices = variant.choices;
        if(!variantChoices){
            return false
        }

       return Object.entries(choices).every(
        ([key, value])=>variantChoices[key] === value
       ) &&  variant.stock?.inStock && (
        variant.stock.quantity && 
        variant.stock?.quantity > 0)
    })
 }

   

    console.log(variants)
    return(
        <div className="flex flex-col gap-6 ">
           { 

           productoptions.map(option =>(

           <div className="flex flex-col gap-4" key={option.name}> 
           <h4 className="font-medium">Choose a {option.name}</h4>
           <ul className="flex items-center gap-3">
              {option.choices?.map(choice =>{

                const disabled = !isVariantInStock({...SelectedOptions,[option.name!]:choice.description!})


                const selected = SelectedOptions[option.name!] === choice.description;

                const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === 'Color' ? ( 
              <li className="w-8 h-8 rounded-full ring-1 ring-gray-300
                 relative"
                  style={{backgroundColor:choice.value, cursor:disabled ? "not-allowed" : "pointer"}}
                  onClick={clickHandler}
                  >

                   {selected && <div className=" absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2
                   transform -translate-x-1/2  -translate-y-1/2" />
                   }

                   {disabled &&    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2
                    transform -translate-x-1/2  -translate-y-1/2" />}

                </li>) : 
                (<li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm" style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected ? "#f35c7a" : disabled ? "#FBCFE8" : "white",
                    color: selected || disabled ? "white" :"#f35c7a",
                    boxShadow: disabled ? "none" : ""                    
                }}
                onClick={clickHandler}
                >
                    {choice.description}
                </li>) 
             })}

            </ul>
           </div>
           
           )) }

           <Add productId={productId} variantId={selectedVariant?._id || "00000000-0000-0000-0000-000000000000"} 
           stocknumber={selectedVariant?.stock?.quantity || 0}
           />

           {/**Color */}

           {/** (  <div 
                className=""
                 key={choice.value} 
                 onClick={()=>handleOptionSelect(option.name!, choice.description!)}
                 >
                    {choice.description}{disabled && "disabled"}{selected && "selected"}
                    </div>
                    ); */}

               {/* 
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300
                 cursor-pointer relative bg-red-500">
                    <div className=" absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2
                    transform -translate-x-1/2  -translate-y-1/2" />
                 </li>

                 <li className="w-8 h-8 rounded-full ring-1 ring-gray-300
                 cursor-pointer relative bg-blue-500">
                 </li>

                 <li className="w-8 h-8 rounded-full ring-1 ring-gray-300
                 cursor-not-allowed relative bg-green-500">
                      <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2
                    transform -translate-x-1/2  -translate-y-1/2" />
                 </li>
            </ul> */}


            {/**OTHERS */}
            {/* <h4 className="font-medium">Choose a Size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
                    Small
                </li>
                <li className="ring-1 ring-lama text-white bg-lama rounded-md py-1 px-4 text-sm cursor-pointer">
                   Medium
                </li>

                <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
                    Large
                </li>

            </ul> */}
        </div>
    )
}


export default CustomizeProducts;