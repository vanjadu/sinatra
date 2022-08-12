import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import { AnimatePresence } from 'framer-motion'
import Register from './screens/Register'
import Contact from './screens/Contact'
import Profile from './screens/Profile'
import ErrorPage from './screens/ErrorPage'
import Menu from './screens/Menu'
import Cart from './screens/Cart'

const AnimatedRoutes = (): JSX.Element => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
