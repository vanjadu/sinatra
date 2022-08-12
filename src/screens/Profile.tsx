import React, { useContext } from 'react'
import { auth } from '../firebase/firebase-config'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import ErrorPage from './ErrorPage'

const Profile = () => {
  const { user, setUser, loading, setLoading } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    setLoading(true)
    auth.signOut()

    setUser(null)
    localStorage.removeItem('user')

    setLoading(false)
    navigate('/')
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {user ? (
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
              <h1 style={{ fontSize: '3rem' }}>{user?.displayName}</h1>
              <button onClick={logoutHandler}>Izlogujte se</button>
            </motion.div>
          ) : (
            <ErrorPage />
          )}
        </>
      )}
    </>
  )
}

export default Profile
