"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "./navigation/navbar";
import { FaArrowRight } from "react-icons/fa6";



const VideoStories = ({ videos }: { videos: string[] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState<number[]>(
    videos.map(() => 0)
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playbackCompleted, setPlaybackCompleted] = useState(false);

  useEffect(() => {
    const handleProgress = () => {
      const currentVideo = videoRef.current;
      if (currentVideo) {
        const newProgress =
          (currentVideo.currentTime / currentVideo.duration) * 100;
        setVideoProgress((prevProgress) => {
          const updatedProgress = [...prevProgress];
          updatedProgress[currentVideoIndex] = newProgress;
          return updatedProgress;
        });
      }
    };

    const handleVideoEnd = () => {
      if (currentVideoIndex === videos.length - 1) {
        setCurrentVideoIndex(0);
        setPlaybackCompleted(true);
        setVideoProgress(videos.map(() => 0));
      } else {
        setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      }
    };
    const handleVideoStart = () => {
      if (playbackCompleted) {
        setPlaybackCompleted(false);
      }
    };

    const currentVideo = videoRef.current;
    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", handleProgress);
      currentVideo.addEventListener("ended", handleVideoEnd);
      currentVideo.addEventListener("play", handleVideoStart);
      currentVideo.src = videos[currentVideoIndex];
      currentVideo.load();
      // currentVideo.play().catch((error) => {
      //   console.error("Auto-play failed:", error);
      // });
      return () => {
        currentVideo.removeEventListener("timeupdate", handleProgress);
        currentVideo.removeEventListener("ended", handleVideoEnd);
        currentVideo.removeEventListener("play", handleVideoStart);
      };
    }
  }, [currentVideoIndex, videos, playbackCompleted]);


  return (
    <section id="home">
      <div className="pages-video-container relative xl:rounded-2xl shadow-2xl h-[900px] md:h-[700px] lg:h-[100vh]"
        data-aos="zoom-in" data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out">
        <video
          autoPlay
          muted
          controls={false}
          className="pages-video-background h-[800px] md:h-[700px] lg:h-screen w-full object-cover"
          ref={videoRef}
          key={currentVideoIndex}
          playsInline
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="pages-content flex flex-col h-full">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left mx-8 xl:mx-36 lg:mt-12">
            <div className="text-4xl md:text-6xl lg:text-7xl" data-aos="fade-up" data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out">Nature is you,</div>
            <div className="text-4xl md:text-6xl lg:text-7xl" data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out">Discover yourself.</div>
            <div className="flex flex-wrap md:flex-nowrap gap-3 my-6">
              <div className="bg-white text-black w-full sm:w-[350px] lg:h-[150px] " data-aos="fade-up" data-aos-delay="350"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out">
                <div className="p-2 bg-blue-200 w-[5px] h-[5px]"></div>
                <div className=" p-6">
                  <p className="text-sm font-light">Journey with us.</p>
                  <div className="flex justify-between mt-8 items-center">
                    <div>Where You Find Yourself in the Great Outdoors!</div>
                    <div>
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-transparent border-white border-2 text-white w-full sm:w-[350px] lg:h-[150px] hover:bg-green-200 hover:text-black"
                data-aos="fade-up" data-aos-delay="350"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out">
                <div className="p-2 bg-green-700 w-[5px] h-[5px]"></div>
                <div className=" p-6">
                  <p className="text-sm font-light">Discover Your Inner Nature:</p>
                  <div className="flex justify-between mt-8 items-center">
                    <div> Begin Your Quest!</div>
                    <div>
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute top-0 left-0  w-full">
            <div className="w-full">
              <div className="h-1 rounded-full">
                <div>
                  <Navbar />
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default VideoStories;
