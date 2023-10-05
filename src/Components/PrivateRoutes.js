import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';



function PrivateRoutes() {
    // const {user , logOut} = useUserAuth();
 const go = window.localStorage.getItem('auth')
   

console.log("thi is user", go);
  return  go!=null ?<Outlet/>:<Navigate to= '/signin'/>
   
}

export default PrivateRoutes
