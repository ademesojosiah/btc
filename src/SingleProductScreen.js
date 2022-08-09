import React from 'react';
import { useState } from 'react';
import './SingleProductScreen.css';

const SingleProductScreen = () => {
    const[image,setimage] = useState(false)
  return (
    <div className="single_product_screen">
        <p className='single_product_screen_home_link'>Home <span>Goldshell KD6 SE KDA Miner 25.3Th with PSU and Cord</span></p>
        <div className='single_product_screen_upper'>
          <div className="single_product_screen_section_one">

            <div className='line1'>
                <img className='single_product_big_image' src="https://cdn.shopify.com/s/files/1/0548/1257/3883/products/kd6se2_grande.png?v=1656671940" alt="product's image" />
            </div>
                
                <div className="single_product_screen_section_inner">
                  <h2>Description</h2>
                  <p>In stock, ships within 2 business days.</p>
                  <h2 className='rm'>MINABLE COINS</h2>
                  <p>EtHash: Ubiq (UBQ), Ethereum (ETH), Ethereum Classic (ETC), Musicoin (MUSIC), Pirl (PIRL), EtherGem (EGEM), Callisto (CLO).</p>
                </div>
          </div>
          
          <div className="single_product_screen_section_three">
            <p className='single_product_screen_section_three_head'>BT Miners</p>
            <h2>Goldshell KD6 SE KDA Miner 25.3Th with PSU and Cord</h2>
            <p className='single_product_screen_section_three_price'>#4,221,075.52</p>
            {/* <p className='single_product_screen_section_three_condition'>Condition <span>New</span></p>
            <button className='single_product_screen_section_three_New'>New</button><button>Used Under Warrranty</button> */}
            {/* <p className='single_product_screen_section_three_condition'>Hashrate<span>25.3Th/s</span></p> */}
            {/* <button className='single_product_screen_section_three_hashrate_btn'>25.3Th/s</button> */}
            <section>
                
                <button className='single_product_screen_section_three_adc'>ADD TO CART</button>
                <button className='single_product_screen_section_three_btn'>BUY IT NOW</button>
            </section>
          </div>

          
        </div>
    </div>
  )
}

export default SingleProductScreen
