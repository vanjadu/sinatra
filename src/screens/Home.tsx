import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/Home/About'
import Banner from '../components/Home/Banner'
import Chefs from '../components/Home/Chefs'
import Hero from '../components/Home/Hero'
import Instagram from '../components/Home/Instagram'
import OurMenu from '../components/Home/OurMenu'

const Home = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <OurMenu />
      <Chefs />
      <Instagram />
      <Banner />
    </motion.section>
  )
}

export default Home
