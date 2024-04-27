import Image from 'next/image'
import React from 'react'

export const About = () => {
    return (
        <section className='bg-white h-[auto] w-full text-black'>
            <div className='mx-8 xl:mx-36 pt-32'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center '>
                    <div className='md:w-2/3 w-full'>
                        <div className='bg-green-700 w-3 h-3'></div>
                        <div className='text-neutral-500 my-4'>
                            At <span className="text-black font-bold">[naTure]</span>, we believe that the wilderness holds the key to unlocking your true self.
                            Our mission is simple yet profound:
                            to provide transformative trips and events in the wild that allow you to connect with nature and,\
                            in turn, discover the depths of your own being.
                        </div>
                    </div>
                    <div>
                        <div className='w-full h-[60vh] relative flex justify-start items-start lg:items-center '>
                            <Image src="/p5.jpg" alt="canopy-walk" layout='fill' objectFit='cover' />
                            <div className='absolute bg-black  text-white w-1/2 h-1/3 flex justify-center items-center font-bold text-2xl lg:ml-[-15%] '>[naTure]</div>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 items-end my-24 gap-4'>
                    <div className="bg-neutral-100 p-8 border-t-4 border-green-500 shadow-2xl">
                        <p className='text-2xl text-black my-4'> Who We Are</p>
                        Nature isn't just our company name; it's our ethos, our guiding principle.
                        We're a team of passionate adventurers, explorers, and nature enthusiasts
                        dedicated to curating unforgettable experiences in the great outdoors.
                        With years of expertise and a deep love for the wild,
                        we're committed to creating opportunities for self-discovery and personal growth amidst the beauty of nature.
                    </div>
                    <div className="bg-neutral-100 p-8 border-t-4 border-green-600 shadow-2xl">
                        <p className='text-2xl text-black my-4'> Our Philosophy</p>
                        At Nature, we believe that nature is not just a place to visit; it's a homecoming—a return to
                        our roots, our essence. Our slogan, "Nature is You, Discover Yourself," encapsulates our belief
                        that by immersing yourself in the beauty and wonder of the natural world, you can tap into your innermost truths, strengths, and passions.

                        <p className='text-2xl text-black my-4'>Join Us</p>
                        Whether you're a seasoned outdoor enthusiast or a novice adventurer,
                        Nature welcomes you to embark on a journey of self-discovery unlike any other.
                        Let us guide you on an exploration of the wilderness and of yourself, as you
                        reconnect with nature and uncover the boundless potential that lies within.
                    </div>
                    <div className="bg-neutral-100 p-8 border-t-4 border-green-700 shadow-2xl">
                        <p className='text-2xl text-black my-4'> What We Offer</p>

                        Our trips and events are carefully crafted to immerse you in the wonders of
                        the natural world while fostering introspection and self-awareness.
                        Whether you're seeking the thrill of an adrenaline-pumping adventure or
                        the tranquility of a mindful retreat, we have something for everyone:

                        <li className='my-4'>Wilderness Expeditions: Embark on exhilarating journeys through remote landscapes,
                        from rugged mountains to lush forests, led by experienced guides who share their expertise and passion for the outdoors.</li>

                        <li className='my-4'> Nature Retreats: Escape the hustle and bustle of everyday life and retreat to serene wilderness
                        settings where you can rejuvenate your mind, body, and spirit through yoga, meditation, and mindfulness practices.</li>

                        <li className='my-4'> Adventure Challenges: Push your limits and conquer new heights with our adrenaline-fueled
                        adventure challenges, including rock climbing, whitewater rafting, and backcountry skiing, designed to test your courage and resilience.</li>

                        <li className='my-4'> Educational Workshops: Dive deeper into the natural world with our educational workshops
                        and seminars led by expert naturalists, where you can learn about wildlife, ecology, and sustainable living practices.</li>
                    </div>
                </div>
            </div>
        </section>
    )
}
