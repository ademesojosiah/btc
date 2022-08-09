import React from "react";
import { Link } from "react-router-dom";
import './HomeScreen.css'
import Item from "./components/Item";
import Svg1 from './svg/Svg1'
import Svg2 from './svg/Svg2'
import Svg3 from './svg/Svg3'
import Svg4 from './svg/Svg4'
import Box from "./components/Box";
import HomeCard from "./components/HomeCard";
import Coin from "./components/Coin";


const HomeScreen = () => {
	return (
		<div className="homescreen">
			

			<div className="home">
				<section className="banner">
					<img className="img" src={"https://cdn.globalso.com/jsbit/Jsbit-banner-1.jpg"} alt="hero" />
				</section>

        <section className="info">
          <Item svg={<Svg1/>} header={'Shipped from Carlifonia'} text={'We ship all orders from our warehouse to you'} />
          <Item svg={<Svg2/>} header={'Fast Shipping'} text={'Most orders are shipped within 3 days'} />
          <Item svg={<Svg3/>} header={'30 days warranty'} text={'We offer warranty on all products'} />
          <Item svg={<Svg4 />} header={'Customer Service'} text={'Top of the line Email, Chat and Phone support'} />
        </section>


        <div className="button_con">
          <Link to='/products'>
            <button className="cta">Shop Now</button>
          </Link>
        </div>

        <Box title={'Best Sellers'} />
        <section className="home-mid">
          <HomeCard img='https://cdn.shopify.com/s/files/1/2609/9556/files/coinbase-logo-freelogovectors.net_250x.png?v=1641972709' head='Coinbase Commerce | Integrated' text='Pay easly and safely for your order using cryptocurrency and Coinbase.'/>
          <HomeCard img='https://cdn.shopify.com/s/files/1/2609/9556/files/affirm-logo_250x.png?v=1639832180' head='Bitcoin Miners + Affirm | Buy Now, Pay Over Time' text='Make monthly payments for your purchase with no hidden fees.' a='Read more'/>
        </section>
        <Box title={'Beginner Miners'} />
        <Box title={'Big Mining rigs'} />
        <section className="space">
          <h1 className='coin-head'>Shop by coin</h1>
          <div className="home-coin">
            <Coin name='Bitcoin (BTC)' img='https://cdn.shopify.com/s/files/1/2609/9556/files/bitcoin-logo_300x.jpg?v=1641021425' />
            <Coin name='Ethereum (ETH)' img='https://cdn.shopify.com/s/files/1/2609/9556/files/ethereum-logo_eb561f3c-0ff2-41a8-9333-264eb9ecc744_300x.jpg?v=1641021869' />
            <Coin name='Dogecoin (DOGE)' img='https://cdn.shopify.com/s/files/1/2609/9556/files/dogecoin-logo_05dcf3ee-b2df-4912-b7e9-7d187ff8ab05_300x.jpg?v=1641021612' />
            <Coin name='Litecoin (LTC)' img='https://cdn.shopify.com/s/files/1/2609/9556/files/ltc_c8429642-1d6b-4c3e-bb4d-96a2e696bdab_300x.jpg?v=1643108303' />
            <Coin name='Dash (DASH)' img='https://cdn.shopify.com/s/files/1/2609/9556/files/dash-logo_20df5ff3-4592-4098-ad9d-d33548b1e133_200x.jpg?v=1641022204' />
          </div>
        </section>

			</div>
		</div>
	);
};

export default HomeScreen;
