import React from 'react'
import Logo from '../../images/Logo.png'

const Footer = () => {
  return (
    <footer>
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
        <section>
          <h5>Contacts</h5>
          <ul>
            <li>Adress</li>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h5>Social Media</h5>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </section>


      </footer>
  )
}

export default Footer