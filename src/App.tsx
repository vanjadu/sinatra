import React, { useState } from 'react'
import './styles/app.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Navbar from './components/Navbar'
import AlterNav from './components/AlterNav'
import Footer from './components/Footer'
import AnimatedRoutes from './AnimatedRoutes'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'

function App() {
  const [alterNav, setAlterNav] = useState<boolean>(false)

  return (
    <UserProvider>
      <CartProvider>
        <Navbar alterNav={alterNav} setAlterNav={setAlterNav} />
        <AlterNav alterNav={alterNav} />
        <ToastContainer autoClose={2000} pauseOnHover={false} />
        <AnimatedRoutes />
        <Footer />
      </CartProvider>
    </UserProvider>
  )
}

export default App
