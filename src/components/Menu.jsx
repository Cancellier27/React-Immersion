import React from 'react'
import Logo from '../assets/img/FIFLIX.png'
import './Menu.css'
import ButtonLink from './ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="FIFLIX" />
      </a>

    <ButtonLink className="ButtonLink" href="/" >
      New Video     
    </ButtonLink>
    </nav>
  )
}

export default Menu