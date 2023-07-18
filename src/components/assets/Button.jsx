import React from 'react'
import './Button.css'

const Button = ({BtnOnClick, BtnText}) => {
  return (
        <button onClick={BtnOnClick}>
            {BtnText}
        </button>
  )
}

export default Button