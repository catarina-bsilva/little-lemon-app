import React from 'react'
import Testemonials from '../cards/Testemonials'
import mia from '../../images/mia.jpg'
import john from '../../images/john.jpg'
import kim from '../../images/kim.jpg'
import zenda from '../../images/zenda.jpg'
import './SectionTestemonials.css'

const SectionTestemonials = () => {
  return (
    <section id='Testemonials'>
          <h1 className='TiTleSection'>Testemonials</h1>
          <Testemonials ImgSrc={john} PersonName="John" Quote="Great food, great wine and great service." Rating="5"/>
          <Testemonials ImgSrc={mia} PersonName="Mia" Quote="Super!" Rating="4"/>
          <Testemonials ImgSrc={zenda} PersonName="Zenda" Quote="Definetly coming back for more delicious food." Rating="5"/>
          <Testemonials ImgSrc={kim} PersonName="Kim" Quote="Yummy!" Rating="4"/>
        </section>
  )
}

export default SectionTestemonials