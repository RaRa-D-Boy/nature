import React from 'react'
import VideoStories from '../../components/videoCarousel'
import { Features } from '../features/features'
import { FeaturesNews } from '../features/featureNews'
import { About } from '../about/about'
import { Footer } from '../footer/footer'
import { NavItem } from '../navigation/navItem'

export const Homepage = () => {
  const stories = [
    "https://res.cloudinary.com/denu07mp4/video/upload/v1714390712/v6_sqrhoj.mp4",
    "https://res.cloudinary.com/denu07mp4/video/upload/v1714390791/v5_rqztf8.mp4",
    "https://res.cloudinary.com/denu07mp4/video/upload/v1714390833/v2_hmgec5.mp4",
    "https://res.cloudinary.com/denu07mp4/video/upload/v1714390964/v1_lih1oj.mp4",
  ]

  return (
    <section className='relative'>
      <VideoStories videos={stories} />
      <FeaturesNews />
      <Features />
      <About />
      <Footer />

    </section>
  )
}
