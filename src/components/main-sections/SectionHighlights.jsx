import React from 'react'
import Highlights from '../cards/Highlights'
import bruchetta from '../../images/bruchetta.svg'
import greekSalad from '../../images/greek-salad.jpg'
import lemonDessert from '../../images/lemon-dessert.jpg'
import './SectionHighlights.css'

const SectionHighlights = () => {
  return (
    <section id='WeeksHighlights'>
          <h1 className='TiTleSection'>Week's highlights</h1>
          <Highlights ImgSrc={bruchetta} DishName="Bruchetta" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="15.00€"/>
          <Highlights ImgSrc={greekSalad} DishName="Greek Salad" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="12.00€"/>
          <Highlights ImgSrc={lemonDessert} DishName="Lemon Dessert" Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima delectus fugit aut odio nostrum veniam qui" Price="10.00€"/>
        </section>
  )
}

export default SectionHighlights