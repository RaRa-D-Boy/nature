"use client"
import React, { useState } from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { NavItem } from './navItem';



export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleHideNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='nav'>
      <nav className="  relative glass-background"
        data-aos="fade-left" data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
        <div className='flex justify-between mx-8 xl:mx-36 items-center '>
          <div className='flex gap-6 items-center'>
            <button onClick={handleHideNav} data-aos="fade-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">
              <CgMenuLeft className="text-4xl lg:block hidden" />
            </button><span className="text-2xl font-bold" data-aos="fade-down" data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out">[naTure]</span></div>
          <div className='flex gap-4 items-center' data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out">
            <AiOutlineUser className="text-2xl" />
            <button className='p-6 bg-green-600 text-white  lg:block hidden'> Contact Us</button>
            <button className='block lg:hidden py-6' onClick={handleHideNav}> <CgMenuLeft className="text-4xl  " /></button>
          </div>
        </div>
        {showNav ? <NavItem bool={showNav} /> : ""}
      </nav>
    </div>

  )
}
