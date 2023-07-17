import React from 'react'
import basket from '../../images/basket.svg'

const Highlights = ({ImgSrc, DishName, Description, Price}) => {
  return (
    <article>
        <img src={ImgSrc} alt="Dish" width="343px"/>
        <h3>{DishName}</h3>
        <p>{Description}</p>
        <p>{Price} <span><img src={basket} alt="Basket" /></span></p>
    </article>
  )
}

export default Highlights