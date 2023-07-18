import React from 'react'
import starImg from '../../images/star.jpg'
import './Testemonials.css'

const Testemonials = ({ImgSrc, PersonName, Quote, Rating}) => {

const renderStars = () => {
    const stars = [];

    for (let i = 0; i < Rating; i++) {
        stars.push(<img key={i} src={starImg} alt="Star" width="30px" />);
    }

    return stars;
    }

  return (
    <article id='TestemonialsCard'>
        <img src={ImgSrc} alt="Customer" width="343px"/>
        <div id="ContainerTestemonials">
          <h3>{PersonName}</h3>
          <p id='Starts'>{renderStars()}</p>
          <p id='Quote'>"{Quote}"</p>
        </div>
    </article>
  )
}

export default Testemonials