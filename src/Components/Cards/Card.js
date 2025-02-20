import React, { useContext, useEffect, useState } from 'react'
import './Card.css'
import { PassingValue } from '../../App'



const Card = ({image,productName,productPrice,productDesc}) => {
  const {count,setCount} = useContext(PassingValue)
  
 useEffect(()=>{  
    console.log("Use");
    
 },[count])
 const cardCount = ()=>{
  setCount((curr)=>curr+1)
}
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
          <button onClick={cardCount}>Add to cart</button>
      </div>
    </div>
  )
}

export default Card