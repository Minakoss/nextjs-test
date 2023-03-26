import React from 'react'
import Navbar from './Navbar'

function Header({pageTitle}) {
  return (
    <header>
        <Navbar />
        <h1>{pageTitle}</h1>
    </header>
  )
}

export default Header