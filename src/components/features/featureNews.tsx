import React from 'react'

export const FeaturesNews = () => {
    return (
        <section className='relative h-screen w-full'>
            <div className="flex flex-wrap mx-8 xl:mx-36 my-16 justify-between" >
                <div className="mb-8">
                    <p className="text-4xl mb-3">Feature News</p>
                    <button className="py-3 px-8 border-2 border-white">See more</button>
                </div>
                <div className="flex flex-nowrap justify-between gap-4 xl:gap-24 overflow-x-auto max-w-full md:max-w-[100vw]">
                    <div className="flex gap-4 items-end xl:gap-0">
                        <div className=" relative text-white w-[350px] h-[350px] card-info-1">
                            <div className="absolute">
                                <div className='bg-white w-3 h-3'></div>
                                <div className="p-4 font-light">Embrace Authenticity: </div>
                                <div className="p-4 font-light flex  items-end bottom-0 left-0 right-0 mt-32 text-4xl">
                                    Uncover Your Path, Journey to Enlightenment!
                                </div>
                            </div>
                        </div>                        
                        <div className="bg-green-800 text-white w-[350px] flex justify-center items-center h-[350px] xl:w-[150px] xl:h-[150px]">[naTure]</div>
                    </div>
                    <div className="flex items-end">
                        <div className=" relative text-white w-[350px] h-[350px] card-info-2">
                            <div className="absolute">
                                <div className='bg-white w-3 h-3'></div>
                                <div className="p-4 font-light">From Roots to Peaks:</div>
                                <div className="p-4 font-light flex  items-end bottom-0 left-0 right-0 mt-32 text-4xl">
                                    Discover Your True Nature with Us!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap mx-8 xl:mx-36 border-t items-center justify-between border-neutral-800 py-8">
                <div>
                    <span className="bg-purple-200  me-3 my-2 px-1">.</span><span>Who we are </span>
                </div>
                <div className="text-4xl my-2">
                    Mother of nature , the universe within you and beyond.
                </div>
                <div>
                    <button className="bg-green-600 my-2 py-3 px-8 text-white">Read more</button>
                </div>
            </div>
        </section>
    )
}
