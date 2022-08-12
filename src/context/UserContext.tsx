import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const UserContext = createContext({} as UserProps)

interface ProviderProps {
  children?: React.ReactNode
}

interface UserProps {
  user: any
  setUser: (user: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  const location = useLocation()

  const checkUser = () => {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user') || 'null')

      setUser(loggedUser)
    } catch (error) {
      console.log(error)
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser()
  }, [location.pathname])

  const userValues: UserProps = {
    user,
    setUser,
    loading,
    setLoading,
  }

  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  )
}

export { UserContext, UserProvider }
