import React from 'react'
import Navbar from './nav/Navbar'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout