import React from 'react'

export const Features = () => {
    return (
        <section className=' w-full  nature-bg-space pt-24 relative ' id="features">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center   lg:pt-8 mx-8 xl:mx-36">
                <div className='md:text-4xl text-2xl py-2'>
                    Discover<br></br> Yourself in <br></br>Nature's Embrace

                </div>
                <div className='bg-white w-full  h-[auto] px-6 py-16 text-neutral-600'>
                    In a world filled with distractions and noise, reconnecting with nature is essential for nurturing the soul and finding inner peace.
                    <span className='font-bold text-black'> [naTure]</span> offers you the opportunity to escape the hustle and bustle of everyday life and immerse yourself in the
                    tranquility of pristine landscapes. Whether you seek solace in the whispering forests, find inspiration in the majestic mountains,
                    or marvel at the wonders of the wilderness, <span className='font-bold text-black'> [naTure]</span> provides the perfect sanctuary for your soul to flourish.
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between pt-8 lg:pt-0 pb-8 mx-8 xl:mx-36 items-center">
                <div className='md:text-4xl block lg:hidden text-2xl py-2'>Trips, <br></br> Events in <br></br> the Wild</div>
                <div className='bg-neutral-900 opacity-2  w-full  h-[auto] px-6 py-16 text-white'>
                    Our curated trips and events are designed to offer unforgettable experiences in the heart of nature.
                    From guided hikes through ancient forests to wildlife safaris in remote wilderness areas,
                    each journey with <span className='font-bold text-green-400'> [naTure]</span>  is an invitation to explore, learn, and connect with the natural world.
                    Whether you're a seasoned adventurer or a novice nature enthusiast, our diverse range of trips caters to all levels of experience and interests.
                    Join us as we venture off the beaten path and uncover the hidden treasures of our planet's most stunning landscapes.
                </div>
                <div className='text-4xl hidden lg:block lg:text-end'>Trips, <br></br> Events in <br></br> the Wild</div>
            </div>
            <div className=" mt-12 py-8 border-white border-t-4  bg-white md:bg-transparent text-black md:text-white">
                <div className="flex flex-wrap mx-8 xl:mx-36 items-center justify-between ">
                    <div>
                        <span className="bg-purple-200  me-3 my-2 px-1">.</span><span>Our mantra </span>
                    </div>
                    <div className="text-4xl my-2">
                    Escape. Explore. Evolve:<br></br> Your Journey to Self-Discovery Starts Here.
                    </div>
                    <div>
                        <button className="bg-green-600 my-2 py-3 px-8 text-white">Read more</button>
                    </div>
                </div>
            </div> 
        </section>
    )
}
