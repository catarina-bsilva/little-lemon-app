import React from 'react'
import basket from '../../images/basket.svg'
import './Highlights.css'

const Highlights = ({ImgSrc, DishName, Description, Price}) => {
  return (
    <article id='Highlights'>
        <img src={ImgSrc} alt="Dish" width="343px"/>
        <div id="ContainerHighlights">
          <h3>{DishName}</h3>
          <p>{Description}</p>
          <p>{Price} <span><img id='Basket' src={basket} alt="Basket" /></span></p>
        </div>
    </article>
  )
}

export default Highlights