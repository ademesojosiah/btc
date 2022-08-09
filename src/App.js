import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import Nav from "./Nav";
import Products from "./Products";
import LoginScreen from "./LoginScreen";
import SignUp from "./SignUp";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signup' element={<SignUp />} />
        
				<Route path="/" element={<HomeScreen />} />
				<Route path="/products" element={<Products />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
