import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import SigninForm from '../components/Login/LoginForm'
import { UserContext } from '../context/UserContext'
import ErrorPage from './ErrorPage'

const Login = (): JSX.Element => {
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
          <SigninForm />
        </motion.section>
      )}
    </>
  )
}

export default Login
