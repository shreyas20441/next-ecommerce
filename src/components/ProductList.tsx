import Link from "next/link";
import Image from "next/image";

const ProductList = () =>{

    return (
        <div className="mt-12 flex gap-x-8 justify-between flex-wrap">
            
            <Link href='/test' className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image 
               src="https://images.pexels.com/photos/25664635/pexels-photo-25664635/free-photo-of-studio-shot-of-a-woman-sitting-on-the-floor-next-to-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
               />

            <Image 
               src="https://images.pexels.com/photos/27516990/pexels-photo-27516990/free-photo-of-bride-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md"
               />

            </div>
             <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
             </div>
             <div className="texts-sm text-gray-500">
                My Description
             </div>

             <button className="rounded-2xl ring-1 ring-lama text-lama
             py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">Add tO Cart</button>
            </Link>


              <Link href='/test' className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image 
               src="https://images.pexels.com/photos/25946920/pexels-photo-25946920/free-photo-of-woman-in-white-clothes-posing-with-a-glass-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
               />

            <Image 
               src="https://images.pexels.com/photos/25946921/pexels-photo-25946921/free-photo-of-portrait-of-a-woman-drinking-from-a-glass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md"
               />

            </div>
             <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
             </div>
             <div className="texts-sm text-gray-500">
                My Description
             </div>

             <button className="rounded-2xl ring-1 ring-lama text-lama
             py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">Add tO Cart</button>
            </Link>


            <Link href='/test' className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image 
               src="https://images.pexels.com/photos/25945181/pexels-photo-25945181/free-photo-of-blonde-woman-posing-wearing-sunglasses-and-black-spotted-dress-in-stone-alley.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
               />

            <Image 
               src="https://images.pexels.com/photos/25945190/pexels-photo-25945190/free-photo-of-blonde-woman-in-black-spotted-dress-and-sunglasses-posing.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md"
               />

            </div>
             <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
             </div>
             <div className="texts-sm text-gray-500">
                My Description
             </div>

             <button className="rounded-2xl ring-1 ring-lama text-lama
             py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">Add tO Cart</button>
            </Link>



            <Link href='/test' className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image 
               src="https://images.pexels.com/photos/25922591/pexels-photo-25922591/free-photo-of-portrait-of-smiling-brunette-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
               />

            <Image 
               src="https://images.pexels.com/photos/20381929/pexels-photo-20381929/free-photo-of-brunette-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
               alt=""
               fill 
               sizes="25vw"
               className="absolute object-cover rounded-md"
               />

            </div>
             <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$49</span>
             </div>
             <div className="texts-sm text-gray-500">
                My Description
             </div>

             <button className="rounded-2xl ring-1 ring-lama text-lama
             py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>

        </div>
        
    )
}

export default ProductList;