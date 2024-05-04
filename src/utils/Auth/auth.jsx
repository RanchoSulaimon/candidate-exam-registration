import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const isAuthenticate = true;
  return (
    <div>
      {isAuthenticate ? <Outlet/> : <Navigate path="/"/>}
    </div>
  )
}

export default Auth