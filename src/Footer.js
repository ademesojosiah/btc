import React from 'react';
import './Footer.css';
import visaIcon from './svgs/visaIcon.svg';
import masterCard from './svgs/masterCard.svg';
import twitter from './svgs/icon-twitter.svg';
import facebook from './svgs/icon-facebook.svg';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='upper_footer'>
            <div className='upper_footer_columns'><h3>links</h3>
            <p><a href="/" ><strong>Payment Method</strong></a></p>
            <p><a href="https://affiliate.bt-miners.com"><strong>Affiliate</strong></a></p>
            <p><a href="/" ><strong>Privacy Policy</strong></a></p>
            <p><a href="/" ><strong>Return Policy</strong></a></p>
            <p><a href="/" ><strong>Terms and Conditions</strong></a></p>
            <p><a href="/" ><strong>Payment &amp; Shipment &amp; Warranty</strong></a></p>
            <p><a href="/" ><strong>Client's Review Videos</strong></a></p>
            <p><a href="/"><strong>News</strong></a></p>
            </div>
            <div  className='upper_footer_columns upper_footer_columns_icons'>
            <h3>Follow Us</h3>
                    <img src={twitter} alt="" /><img src={facebook} alt="" /> <img src='https://img.icons8.com/ios-glyphs/30/FFFFFF/pinterest.png' alt="" />
            </div>
            <div className='upper_footer_columns upper_footer_newsletter'>
                <h3>Newsletter</h3>
                        <p>Sign Up For The Latest Miner News & Exclusive Offers</p>
                        <input type="text" name="" id="" placeholder='Your email'/>
                        <button className='sub'>SUBSCRIBE</button>
            </div>
            <div className='upper_footer_columns'>
                <h3>BT-Miners</h3>
                <p>No. 16, Haitian 2nd Road, Nanshan District, Shenzhen 518025 China</p>
                <p>+86-13112721131</p>
                <p>kc.tang@bt-miners.com</p>
                <p>(Office Hours: 9:30am -6:30pm UTC+8, Monday - Friday)</p>
            </div>
            <div className='upper_footer_columns'>
                <h3>BT-Miners Global</h3>
                <p>11 Round Lake Road</p>
                <p>Ballston Lake, NY 12019 </p>
                <p>United States</p>
                <p>Tel: 813-680-2008</p>
                <p>store@bt-miners.com</p>
                <p>kc.tang@bt-miners.com</p>
                <p>Office Hours : 9AM - 5PM EST, Monday - Friday</p>
            </div>
        </div>
        <div className='lower_footer'>
            <div className='lower_footer_text'><p>Copyright BT-Miners, A Division of Lizheng Stainless Steel Tube & Coil Corp. © 2022,  <a href="https://bt-miners.com/">BT-Miners </a>Lizheng Stainless Steel Tube and Coil Corp</p></div>
            <div className='lower_footer_icon'><img src={masterCard} alt="" /><img src={visaIcon} alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Footer
