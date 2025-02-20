import React, { useContext, useState } from 'react'
import Card from '../../Components/Cards/Card'
import Shirt1 from './../../assets/Images/shopping.webp'
import './All.css'
import { PassingValue } from '../../App'
const product = [
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
  {
  image:Shirt1,
  productName:"Highlander Men's Checkered Casual Shirt",
  productPrice:"Rs: 677",
  productDesc:"Casual Shirts for Men - Shop for Casual Shirts for Men Online. Explore the best collection of Casual Shirts for Men with various colours & patterns at best",
},
]

const All = () => {
const {count} = useContext(PassingValue)
console.log(count);

  return (
    <div className='All'>
      {product.map((item)=>(
        <Card {...item} />
      ))}
      <p>Card {count}</p>
      
    </div>
  )
}

export default All