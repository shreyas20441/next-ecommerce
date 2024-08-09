import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = ()=>{

    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            <div className="h-full flex items-center justify-between md:hidden">

      
            {/**Mobile */}
            <Link href="/">
             <div className=" text-2xl tracking-wide">ClOTH</div>
            </Link>
            <Menu/> 
            </div>

            {/**Bigger screens */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/**LEft */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                  <Link href='/' className="flex items-center gap-3">
                   <Image src="/logo.png" alt="" width={24} height={24} />
                  <div className=" text-2xl tracking-wide">CLOTH</div>
                  </Link>
                  <div className="hidden xl:flex gap-4">
                    <Link href="/">HomePage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contacts</Link>
                  </div>
                </div>
                {/**Right */}

                <div className="w-2/3 flex items-center justify-between gap-8">
                  <SearchBar/>
                  <NavIcons/>

                </div>
            </div>
        </div>
    )
}


export default Navbar;