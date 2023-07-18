import React from 'react'
import Logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
      </nav>
    </header>
  )
}

export default Header