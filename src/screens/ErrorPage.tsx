import React from 'react'
import { motion } from 'framer-motion'

const ErrorPage = () => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 style={{ fontSize: '3rem' }}>404 Greska</h1>
    </motion.div>
  )
}

export default ErrorPage
