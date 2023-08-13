import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
const Context = React.createContext({})

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const jwt = Cookies.get('jwt')
    if (jwt) setIsLogin(true)
    else setIsLogin(false)
  }, [])

  return (
    <Context.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </Context.Provider>
  )
}

export default Context
