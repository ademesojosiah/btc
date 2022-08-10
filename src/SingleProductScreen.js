import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import './SingleProductScreen.css';
import data from "./data";
import { useParams } from 'react-router-dom';

const SingleProductScreen = () => {
    const[image,setimage] = useState(false)
    let { itemId } = useParams();
    console.log(itemId)
    
    
    const newData = data.filter(item => item.id === itemId )
    console.log(newData)
    
  return (
    <>
    {newData &&
    <>
    <Nav />

    <div className="single_product_screen">
        <p className='single_product_screen_home_link'>Home <span>{newData[0]['name']}</span></p>
        <div className='single_product_screen_upper'>
          <div className="single_product_screen_section_one">

            <div className='line1'>
                <img className='single_product_big_image' src={newData[0]['img']} alt="product's image" />
            </div>
                
                <div className="single_product_screen_section_inner">
                  <h2>Description</h2>
                  <p>In stock, ships within 2 business days.</p>
                  <h2 className='rm'>MINABLE COINS</h2>
                  <p>EtHash: Ubiq (UBQ), Ethereum (ETH), Ethereum Classic (ETC), Musicoin (MUSIC), Pirl (PIRL), EtherGem (EGEM), Callisto (CLO).</p>
                </div>
          </div>
          
          <div className="single_product_screen_section_three">
            <p className='single_product_screen_section_three_head'>{newData[0]['coin']} Miners</p>
            <h2>{newData[0]['name']}</h2>
            <p className='single_product_screen_section_three_price'>${newData[0]['price']}</p>
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
    <Footer />
    </>
    }
    </>
  )
}

export default SingleProductScreen
