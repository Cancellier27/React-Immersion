import React from 'react'
import Logo from '../../assets/img/FIFLIX.png'
import './Menu.css'
// import ButtonLink from '../ButtonLink'
import Button from './Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="FIFLIX" />
      </a>

    <Button as='a' className="ButtonLink" href="/" >
      New Video     
    </Button>
    </nav>
  )
}

export default Menu