"use client"
import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";

export const NavItem = ({bool}:any) => {

    const [hideNav , setHideNav] = useState(bool);

    const handleHideNav = () => {
        setHideNav(!hideNav)
    }

    return (
        <section className={hideNav ?  'block absolute fixed w-full z-10 top-0  ' : "hidden"}>
            <div className='bg-black  text-white w-full h-screen '>
                <div className="p-12 block">
                    <div className='text-bold text-2xl text-white pb-24 '>

                        <div className='flex justify-between items-center mb-8'>
                            <div className='bg-green-600 w-5 h-5 '></div>

                            <div><button className="font-light text-xl hover:bg-green-600 p-3 hover:shadow-2xl text-white" onClick={handleHideNav}>
                                <IoClose />
                            </button></div>
                        </div>
                        <div>[naTure]</div>
                    </div>
                    <div className='py-2 hover:mx-4'> <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500} href="" className="text-3xl md:text-7xl">Home</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4'> <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500} href="" className="text-3xl md:text-7xl">About</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4'><ScrollLink
                        to="features"
                        smooth={true}
                        duration={500} href="" className="text-3xl md:text-7xl">Service</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4'><ScrollLink
                        to="footer"
                        smooth={true}
                        duration={500} href="" className="text-3xl md:text-7xl">Contact</ScrollLink>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-12'> Nature is you, Discover yourself .</div>
            </div>
        </section>
    )
}
