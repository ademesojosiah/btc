import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Footer from "./Footer";
import Nav from "./Nav";
import Products from "./Products";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/products" element={<Products />} />

			</Routes>
			<Footer />
		</div>
	);
};

export default App;
