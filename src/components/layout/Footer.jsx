import React from 'react'
import Logo from '../../images/Logo.png'
import './Footer.css'
import {Link} from 'react-router-dom'
import {CgMenuGridR} from 'react-icons/cg'
import { useState } from 'react'

const Footer = () => {
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
    <footer>
      <img src={Logo} alt="Logo" id='LogoFooter' />
      <CgMenuGridR id="MenuGrid" className='MenuHide' onClick={ToggleShowMenu} />
      <div id='ContainerFooter' className={`NavFooter ${showMenu ? 'Active' : ''}`}>
        <nav>
          <ul id='FooterNav'>
            <li className='Link'><Link to="/" onClick={ScrollToTop}>Home</Link></li>
            <li className='Link'><Link to="/" onClick={handleScroll}>About</Link></li>
            <li className='Link'><Link to="/Menu">Menu</Link></li>
            <li className='Link'><Link to="/Reservations">Reservations</Link></li>
            <li className='Link'><Link to="/Order">Order Online</Link></li>
            <li className='Link'><Link to="/Login">Login</Link></li>
          </ul>
        </nav>
          <section>
            <h5>Contacts</h5>
            <ul>
              <li>Adress</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </section>
          <section>
            <h5>Social Media</h5>
            <ul >
              <li className='Link'><a href="http://www.instagram.com"target='_blank' >Instagram</a></li>
              <li className='Link'><a href="http://www.facebook.com" target='_blank'>Facebook</a></li>
            </ul>
          </section>
      </div>


      </footer>
  )
}

export default Footer