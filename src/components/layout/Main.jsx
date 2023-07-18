import React from 'react'
import img1 from '../../images/image1.jpg'
import bruchetta from '../../images/bruchetta.svg'
import greekSalad from '../../images/greek-salad.jpg'
import lemonDessert from '../../images/lemon-dessert.jpg'
import Highlights from '../cards/Highlights'
import Testemonials from '../cards/Testemonials'
import mia from '../../images/mia.jpg'
import john from '../../images/john.jpg'
import kim from '../../images/kim.jpg'
import zenda from '../../images/zenda.jpg'
import img2 from '../../images/image2.jpg'
import './Main.css'
import Button from '../assets/Button'


const Main = () => {

  function HandleClick(){
    console.log("clicked")
  }
  return (
    <main>
        <section id='SectionLittleLemon'>
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cumque sunt, temporibus voluptatem, accusantium quisquam tenetur veritatis aut corporis error impedit molestiae facilis, illum totam id tempore libero explicabo! Beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis facere perspiciatis incidunt distinctio, ut maxime sed dolores accusantium natus magnam numquam asperiores deleniti? Eligendi temporibus necessitatibus inventore aspernatur ullam!</p>
            <Button BtnText="Reserve a table" BtnOnClick={HandleClick}/>
          </article>
          <aside>
            <img src={img1} alt="Foto Little Lemon" width="310px" />
          </aside>
        </section>
        <section id='WeeksHighlights'>
          <h1 className='TiTleSection'>Week's highlights</h1>
          <Highlights ImgSrc={bruchetta} DishName="Bruchetta" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="15.00€"/>
          <Highlights ImgSrc={greekSalad} DishName="Greek Salad" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="12.00€"/>
          <Highlights ImgSrc={lemonDessert} DishName="Lemon Dessert" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="10.00€"/>
        </section>
        <section id='Testemonials'>
          <h1 className='TiTleSection'>Testemonials</h1>
          <Testemonials ImgSrc={john} PersonName="John" Quote="Great food, great wine and great service." Rating="5"/>
          <Testemonials ImgSrc={mia} PersonName="Mia" Quote="Super!" Rating="4"/>
          <Testemonials ImgSrc={zenda} PersonName="Zenda" Quote="Definetly coming back for more delicious food." Rating="5"/>
          <Testemonials ImgSrc={kim} PersonName="Kim" Quote="Yummy!" Rating="4"/>
        </section>
        <section id='AboutLittleLemon'>
          <h1 className='TiTleSection'>About Little Lemon</h1>
          <article>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis eveniet esse cupiditate explicabo enim cumque voluptatum molestias illum minima natus id, est recusandae molestiae dolorum sint. Excepturi voluptatem quam delectus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti laborum asperiores nemo, voluptas quas nesciunt eaque repellendus veritatis ut! Doloribus magni libero quis adipisci dignissimos dolorum veniam dolore nostrum.</p>
          </article>
          <aside id='AboutLittleLemonFoto'>
          <img src={img2} alt="Foto Little Lemon" width="310px" />
          </aside>
        </section>
      </main>
  )
}

export default Main