import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/Contact/ContactForm'

const Contact = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactForm />
    </motion.section>
  )
}

export default Contact
