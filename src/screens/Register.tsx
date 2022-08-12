import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import RegisterForm from '../components/Register/RegisterForm'
import { UserContext } from '../context/UserContext'
import ErrorPage from './ErrorPage'

const Register = (): JSX.Element => {
  const { user } = useContext(UserContext)

  return (
    <>
      {user ? (
        <ErrorPage />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <RegisterForm />
        </motion.section>
      )}
    </>
  )
}

export default Register
