import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const[isLoading, setIsLoading] = useState(false)

  const loginUser = (userInfo)=>{
    setIsLoading(true);
    setUser()

  }
  const registerUser = (userInfo)=>{
    
  }
  const contextData = {
    user,
    loginUser,
    registerUser
  }
  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
  return(useContext(AuthContext));
}

export default AuthProvider