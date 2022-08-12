import React from 'react'
import { motion } from 'framer-motion'
import MenuHero from '../components/Menu/MenuHero'
import MenuItems from '../components/Menu/MenuItems'

const Menu = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MenuHero />
      <MenuItems />
    </motion.section>
  )
}

export default Menu
