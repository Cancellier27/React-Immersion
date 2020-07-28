import React from 'react'
import Logo from '../assets/img/FIFLIX.png'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="FIFLIX" />
      </a>

      <a href="/" className="ButtonLink">
        New Video
      </a>
    </nav>
  )
}

export default Menu