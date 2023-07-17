import React from 'react'
import starImg from '../../images/star.jpg'

const Testemonials = ({ImgSrc, PersonName, Quote, Rating}) => {

const renderStars = () => {
    const stars = [];

    for (let i = 0; i < Rating; i++) {
        stars.push(<img key={i} src={starImg} alt="Star" width="30px" />);
    }

    return stars;
    }

  return (
    <article>
        <img src={ImgSrc} alt="Customer" width="343px"/>
        <h3>{PersonName}</h3>
        <p>{renderStars()}</p>
        <p>"{Quote}"</p>
    </article>
  )
}

export default Testemonials