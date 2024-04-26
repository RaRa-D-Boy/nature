import React from 'react'
import { Navbar } from '../../components/navbar'
import VideoStories from '../../components/videoCarousel'

export const Homepage = () => {
    const stories = ["/v1.mp4", "/v2.mp4","/v3.mp4"]

  return (
   <section>
  
<div>
    <VideoStories videos={stories} />
</div>

   </section>
  )
}
