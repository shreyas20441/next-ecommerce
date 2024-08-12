"use client";

import Image from "next/image";
import { useState } from "react";



const images = [
{   
    id: 1, 
    url:"https://images.pexels.com/photos/7945550/pexels-photo-7945550.jpeg?auto=compress&cs=tinysrgb&w=600",
},

{
    id:2,
    url:"https://images.pexels.com/photos/7945489/pexels-photo-7945489.jpeg?auto=compress&cs=tinysrgb&w=600"
},

{
    id:3,
    url:"https://images.pexels.com/photos/5368656/pexels-photo-5368656.jpeg?auto=compress&cs=tinysrgb&w=600"
},

{
    id:4,
    url:"https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=600"
},

]


const ProductImages = ()=>{

    const [index, setIndex] = useState(0);



    return(
        <div className="">
            {/**Main IMages */}
            <div className="h-[500px] relative">
                <Image 
                 src={images[index].url}
                 alt="" 
                 fill 
                 sizes="50vw"
                 className="object-cover rounded-md"/>
            </div>
            {/**Small Images */}
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i)=>(
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>{setIndex(i)}}>
                        <Image
                         src={img.url}
                         alt=""
                         fill
                         sizes="30vw"
                         className="object-cover rounded-md"
                         />
                    </div>
                ))}

            </div>
        </div>
    )
}


export default ProductImages;