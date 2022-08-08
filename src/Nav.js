import React from 'react'
import { useState } from 'react';
import './Nav.css';
import Ham from './svgs/icon-hamburger.svg';
import MobileDropdown from './MobileDropdown'

const Nav = () => {
    const [mobile,setmobile] = useState(false)
  return (
    <nav className='nav'>
        <div className='first_nav'>
            <p>Financing options may be available for purchases made under business entity. Call +1 (813) - 680 - 2008 for details.</p>
        </div>
        <div className='second_nav'>
            <div className='second_nav_details'>
            <p>For business clients in the US, Please email us your sales tax exemption to waive your sales tax</p>
            </div>
            <div className='second_nav_icons'>
                <div><p><span className="second_nav_icon_login">Log in</span> or <span className="second_nav_icon_create_account">Create account</span></p></div>
                <div className='second_nav_icon_cart'><img src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png"/>Cart</div>
                <div className='second_nav_icon_naira'>NGN</div>
                <div className='second_nav_icon_search'><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/> <input type="search" placeholder='Search' /></div>
            </div>

        </div>
        <div className='third_nav'>
            <div className='third_nav_logo'><img src="https://cdn.shopify.com/s/files/1/0548/1257/3883/files/1_360x.png?v=1642197150" alt="" /></div>
            <div className='third_nav_info'>
                <h2>√Leading Supplier</h2>
                 <p> in America</p>
            </div>
            <div className='third_nav_info border'>
            <h2>√Fastest Growing</h2>
                 <p> MINING COMMUNITY</p>
            </div>
            <div className='third_nav_info '>
            <h2>√Trusted</h2>
                 <p> BY OVER 10000 Customers</p>
            </div >
            <div className='third_nav_info'>
                <button>Book A Free Consultation</button>
            </div>

        </div>
        <div className='mobile_nav_menu'>
            <div className='mobile_icon'>{!mobile ? <><img onClick={()=>setmobile(true)} src={Ham} alt="" /><p>Menu</p></> : <>< img  className='mobile_icon_close_icon' onClick={()=>setmobile(false)} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/delete-sign.png" alt="" /><p>Menu</p></>   }</div>
            <div>
                <div className='mobile_icon_cart'><img src="https://img.icons8.com/material-rounded/24/FFFFFF/shopping-cart.png"/>Cart</div>
                <div className='mobile_icon_naira'>NGN</div>
            </div>
        </div>
           { mobile && (<div className='mobile_menu_dropdown'>
                <MobileDropdown title={'MINERS PROFITABILITY'} links={[{url:'',text:'Miners Probability'},{url:'',text:'Cost Calculator'},{url:'',text:'Btc Earnings Calculator'},{url:'',text:'Eth Earnings Calculator'},{url:'', text:'LTC + Doge Earning Calculator'},{url:'',text:'ETC Earnings Calculator'},{url:'',text:'KDA Earnings Calculator'},{url:'',text:'HNS Earnings Calculator'}]}/>
                <MobileDropdown title={'ALL MINERS '} links={[{url:'',text:'Bitcoin Miners'},{url:'',text:'Ethereum Miner'},{url:'',text:'LiteCoin & DodgeCoin Miners'},{url:'',text:'Other Altcoin Miners'},{url:'',text:'Parts and Accessories'}]}/>
                <div className="dropDown_head"><a href="/">PAYMENT METHOD</a></div>
                <div className="dropDown_head"><a href="/">MINER REPAIR</a></div>
                <MobileDropdown title={'KNOWLEDGE'}  links={[{url:'',text:'Miner Selection'},{url:'',text:'Setting Up Your Miner'},{url:'',text:'About Kadena(KDA)'},{url:'',text:'About Handshake(HNS)'},{url:'',text:'About Litecoin(LTC)'},{url:'',text:'About Dodge(DODGE)'},{url:'',text:'Miners FAQs'},{url:'',text:'GoldShell Indicator Light'}]}/>
                <MobileDropdown title={'CONTACT'}  links={[{url:'',text:'Service'},{url:'',text:'Sell Your Miner'},{url:'',text:'Miner Hosting'},{url:'',text:'Join Us'},{url:'',text:'About Us'},{url:'',text:'Newsletter'},{url:'',text:'Client Review Videos'}]}/>
                <div className='second_nav_icon_search'><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/> <input type="search" placeholder='Search' /></div>          
            </div>)}

        <div className='mobile_menu_logo'>
            <img src="https://cdn.shopify.com/s/files/1/0548/1257/3883/files/1_360x.png?v=1642197150" alt="" />
        </div>






        <div className='fourth_nav'>
            <div className='dropBtn'><button className='first_dropdown'>MINERS PROFITABILITY</button>
            <div className='dropBtn_content'>
                <a href="">Miners Probability</a>
                <a href="">Cost Calculator</a>
                <a href="">Btc Earnings Calculator</a>
                <a href="">Eth Earnings Calculator</a>
                <a href="">LTC + Doge Earning Calculator</a>
                <a href="">ETC Earnings Calculator</a>
                <a href="">KDA Earnings Calculator</a>
                <a href="">HNS Earnings Calculator</a>
            </div>
            </div>
            <div className='dropBtn'><button className=' dropdown '>ALL MINERS</button>
            <div className='dropBtn_content'>
                <a href="">Bitcoin Miners</a>
                <a href="">Ethereum Miners</a>
                <a href="">LiteCoin & DodgeCoin Miners</a>
                <a href="">Other Altcoin Miners</a>
                <a href="">Parts and Accessories </a>
            </div>
            </div>
            <div className='dropBtn'><button className=' dropdown '>PAYMENT METHOD</button>
            </div>
            <div className='dropBtn'><button className=' dropdown '>MINER REPAIR</button>
            </div>
            <div className='dropBtn'><button className=' dropdown '>KNOWLEDGE</button>
            <div className='dropBtn_content'>
                <a href="">Miner Selection</a>
                <a href="">Setting Up Your Miner</a>
                <a href="">About Kadena(KDA)</a>
                <a href="">About Handshake(HNS)</a>
                <a href="">About Litecoin(LTC)</a>
                <a href="">About Dodge(DODGE)</a>
                <a href="">Miners FAQs</a>
                <a href="">GoldShell Indicator Light</a>
            </div>
            </div>
            <div className='dropBtn'><button className=' dropdown '>CONTACT</button>
            <div className='dropBtn_content'>
                <a href="">Service</a>
                <a href="">Sell Your Miner</a>
                <a href="">Miner Hosting</a>
                <a href="">Join Us</a>
                <a href="">About Us</a>
                <a href="">Newsletter</a>
                <a href="">Client Review Videos</a>
            </div>
            </div>

        </div>
      
    </nav>
  )
}

export default Nav
