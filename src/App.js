import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import Nav from "./Nav";
import Products from "./Products";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";
import Cart from "./Cart";
import SingleProductScreen from "./SingleProductScreen";
import Information from "./Information";
import Shipping from "./Shipping";
import Payment from "./Payment";

const App = () => {
	return (
		<div className="app">
			
			<Routes>
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path={`/product`} element={<SingleProductScreen />} />
					<Route path="/" element={<HomeScreen />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					
					<Route path='/checkouts/contact_information' element={<Information />} />
					<Route path='/checkouts/shipping_information' element={<Shipping />} />
					<Route path='/checkouts/payment' element={<Payment />} />
			</Routes>
				
		</div>
	);
};

export default App;
