import React from 'react'
import './Card.css'


const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src="https://cdn.shopify.com/s/files/1/2609/9556/products/20211019_131153_300x.jpg?v=1634677091" alt="so" />
      <p className='card-name'>GekkoScience COMPAC F + Fan Upgrade - COMBO Up to 350GH/s</p>
      <p className='card-price'>$248.99</p>

      <section className='card-button-con'>
        <button className='card-button'>ADD TO CART</button>
      </section>
    </div>
  )
}

export default Card