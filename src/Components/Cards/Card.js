import React from 'react'
import './Card.css'

const Card = ({image,productName,productPrice,productDesc}) => {
  return (
    <div className='Card'>
        <div className='card_Top'>
            <img src={image}></img>
        </div>
        <div className='card_Bottom'>
            <h1>{productName}</h1>
            <h1>{productPrice}</h1>
            <p>{productDesc}</p>
        </div>
        <div className='btn'>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Card