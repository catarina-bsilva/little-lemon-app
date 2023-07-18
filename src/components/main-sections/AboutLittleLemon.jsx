import React from 'react'
import img2 from '../../images/image2.jpg'
import './AboutLittlelemon.css'

const AboutLittleLemon = () => {
  return (
    <section id='AboutLittleLemon'>
      <h1 className='TiTleSection'>About Little Lemon</h1>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis eveniet esse cupiditate explicabo enim cumque voluptatum molestias illum minima natus id, est recusandae molestiae dolorum sint. Excepturi voluptatem quam delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti laborum asperiores nemo, voluptas quas nesciunt eaque repellendus veritatis ut! Doloribus magni libero quis adipisci dignissimos dolorum veniam dolore nostrum.</p>
      </article>
      <aside id='AboutLittleLemonFoto'>
        <img src={img2} alt="Foto Little Lemon" width="310px" />
      </aside>
    </section>
  )
}

export default AboutLittleLemon