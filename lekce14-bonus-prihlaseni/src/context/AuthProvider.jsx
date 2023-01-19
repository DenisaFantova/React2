import React, { createContext, useState } from 'react'

const AuthContext = createContext({});

const userInfo = JSON.parse(localStorage.getItem('userinfo'));

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(userInfo);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;