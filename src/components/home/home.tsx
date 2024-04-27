import React from 'react'
import VideoStories from '../../components/videoCarousel'
import { Features } from '../features/features'
import { FeaturesNews } from '../features/featureNews'
import { About } from '../about/about'
import { Footer } from '../footer/footer'

export const Homepage = () => {
  const stories = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v5.mp4", "/v6.mp4"]

  return (
    <section>
      <VideoStories videos={stories} />
      <FeaturesNews />
      <Features />
      <About />
      <Footer />
    </section>
  )
}
