"use client"

import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}) => {
  return (
  <SessionProvider>
    <div className="container">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  </SessionProvider>
  )
}

export default AuthProvider