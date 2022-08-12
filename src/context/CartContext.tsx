import React, { createContext } from 'react'

const CartContext = createContext({})

interface CartProps {
  children?: React.ReactNode
}

const CartProvider = ({ children }: CartProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }
