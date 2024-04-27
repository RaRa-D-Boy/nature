import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

export const Navbar = () => {
  return (
   <nav className=" border-b  ">
    <div className='flex justify-between mx-8 xl:mx-36 items-center '>
        <div className='flex gap-6 items-center'><CgMenuLeft className="text-4xl lg:block hidden" /> <span className="text-2xl font-bold">[naTure]</span></div>
        <div className='flex gap-4 items-center'>
        <AiOutlineUser className="text-2xl" /> 
        <button className='p-6 bg-green-600 text-white  lg:block hidden'> Contact Us</button>
        <button className='block lg:hidden py-6'> <CgMenuLeft className="text-4xl  " /></button>
        </div>
    </div>
   </nav>
  )
}
