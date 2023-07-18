import React from 'react'
import basket from '../../images/basket.svg'
import './Highlights.css'
import { Link } from 'react-router-dom'

const Highlights = ({ImgSrc, DishName, Description, Price}) => {
  return (
    <article id='Highlights'>
        <img src={ImgSrc} alt="Dish" width="343px"/>
        <div id="ContainerHighlights">
          <h3><Link to="/Dish">{DishName}</Link></h3>
          <p>{Description}</p>
          <p>{Price} <span><img id='Basket' src={basket} alt="Basket" /></span></p>
        </div>
    </article>
  )
}

export default Highlights