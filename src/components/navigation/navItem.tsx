"use client"
import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll";
import { IoClose } from "react-icons/io5";

export const NavItem = ({ bool }: any) => {

    const [hideNav, setHideNav] = useState(bool);

    const handleHideNav = () => {
        setHideNav(!hideNav)
    }

    return (
        <section className={hideNav ? ' fixed w-full top-0 nav over-hidden' : "hidden"} data-aos="slide-down" data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out">
            <div className='bg-black  text-white w-full h-screen '>
                <div className="p-12 block">
                    <div className='text-bold text-2xl text-white pb-24 '>

                        <div className='flex justify-between items-center mb-8' data-aos="slide-down" data-aos-delay="250"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out">
                            <div className='bg-green-600 w-5 h-5 ' ></div>

                            <div><button className="font-light text-xl hover:bg-green-600 p-3 hover:shadow-2xl text-white" onClick={handleHideNav}>
                                <IoClose />
                            </button></div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-out">[naTure]</div>
                    </div>
                    <div className='py-2 hover:mx-4' data-aos="fade-up" data-aos-delay="350"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"> <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500} className="text-3xl md:text-7xl"
                            onClick={handleHideNav}>Home</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4' data-aos="fade-up" data-aos-delay="400"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"> <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500} className="text-3xl md:text-7xl"
                            onClick={handleHideNav}>About</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4' data-aos="fade-up" data-aos-delay="450"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"><ScrollLink
                            to="features"
                            smooth={true}
                            duration={500} className="text-3xl md:text-7xl"
                            onClick={handleHideNav}>Service</ScrollLink>
                    </div>
                    <div className='py-2 hover:mx-4' data-aos="fade-up" data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"><ScrollLink
                            to="footer"
                            smooth={true}
                            duration={500} className="text-3xl md:text-7xl"
                            onClick={handleHideNav}>Contact</ScrollLink>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-12' data-aos="fade-up" data-aos-delay="550"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"> Nature is you, Discover yourself .</div>
            </div>
        </section>
    )
}
