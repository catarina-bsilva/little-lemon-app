import React from 'react'
import Logo from '../../images/Logo.png'
import './Header.css'
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    const element = document.getElementById('AboutLittleLemon');
    element.scrollIntoView({ behavior: 'smooth' })
    setShowMenu(false)
  }
  const ScrollToTop = () => {
    const element = document.getElementById('LittleLemon');
    element.scrollIntoView({ behavior: 'smooth' })
    setShowMenu(false)
    }

    const ToggleShowMenu = () => {
      setShowMenu(!showMenu)
      console.log(showMenu)
    }

  return (
    <header>
      <img src={Logo} alt="Logo" />
      <AiOutlineMenu className='MenuHide' id='Hamburger' onClick={ToggleShowMenu}/>
      <nav>
        <ul id='NavHeader' className={`${showMenu ? 'Active' : ''}`}>
          <li className='Link'><Link to="/" onClick={ScrollToTop}>Home</Link></li>
          <li className='Link'><Link to="/" onClick={handleScroll}>About</Link></li>
          <li className='Link'><Link to="/Menu">Menu</Link></li>
          <li className='Link'><Link to="/Reservations">Reservations</Link></li>
          <li className='Link'><Link to="/Order">Order Online</Link></li>
          <li className='Link'><Link to="/Login">Login</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header