import React from 'react'
import Button from '../assets/Button'
import './LittleLemon.css'
import img1 from '../../images/image1.jpg'
import { useNavigate } from 'react-router-dom'

const LittleLemon = () => {
  
  const navigate = useNavigate()

  const HandleClick= () => {
    return(
      navigate('/Reservations')
    )
    
  }

  return (
    <section id='SectionLittleLemon'>
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cumque sunt, temporibus voluptatem, accusantium quisquam tenetur veritatis aut corporis error impedit molestiae facilis, illum totam id tempore libero explicabo! Beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis facere perspiciatis incidunt distinctio, ut maxime sed dolores accusantium natus magnam numquam asperiores deleniti? Eligendi temporibus necessitatibus inventore aspernatur ullam!</p>
            <Button BtnText="Reserve a table" BtnOnClick={HandleClick} id="BtnReserve"/>
          </article>
          <aside>
            <img src={img1} alt="Foto Little Lemon" width="310px" />
          </aside>
        </section>
  )
}

export default LittleLemon