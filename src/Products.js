import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import HomeCard from "./components/HomeCard";
import "./Products.css";
import down from "./svgs/down-arrow-svgrepo-com.svg";
import { data } from "./data";

const Products = () => {
	const [view, SetView] = useState("wide");
	const [sort, SetSort] = useState('Featured')
	const [display, SetDisplay] = useState('36 per page')

	useEffect(() => {
		console.log(view)
		console.log(arr.length)
	}, [view])
	
	const arr = [1,2,3,4,4,5,5,6,6,7,7,3,23,3,32,3,5,5,2,2,2,2,2,2,2]
	arr.length = 50

	return (
		<div className="products">
			<main className="products_main">
				<div className="products_side">
					<h2 className="side_header">Filters</h2>
					<h3>
						Availability{" "}
						<span>
							<img className="down" src={down} alt="s" />
						</span>
					</h3>

					<section className="products_dropdown">
						<form>
							<input type="checkbox" />
							<label>In stock</label>
						</form>
						<form>
							<input type="checkbox" />
							<label>Out of stock</label>
						</form>
					</section>
				</div>

				<section className="products_mid">
					<div className="mid_header">
						<h1>All products</h1>
						<p>Showing {`1 - ${display.split(' ')[0]}`} of {arr.length} products</p>

						<div className="mid_bar">
							<div className="mid_content">
								<h5>Display:</h5>
								<div class="dropdown">
									<button class="dropbtn">{display}</button>
									<div class="dropdown-content">
										<span onClick={() => SetDisplay('24 per page')}>24 per page</span>
										<span onClick={() => SetDisplay('36 per page')}>36 per page</span>
										<span onClick={() => SetDisplay('48 per page')}>48 per page</span>
									</div>
								</div>
							</div>

							<div className="mid_sort">
								<h5>Sort by:</h5>
								<div class="dropdown">
									<button class="dropbtn">{sort}</button>
									<div class="dropdown-content">
										<span onClick={() => SetSort('Featured')}>Featured</span>
										<span onClick={() => SetSort('A - Z')}>A - Z</span>
										<span onClick={() => SetSort('Z - A')}>Z - A</span>
										<span onClick={() => SetSort('Highest - Lowest')}>Highest - Lowest</span>
										<span onClick={() => SetSort('Lowest - Highest')}>Lowest - Highest</span>
									</div>
								</div>
							</div>

							<div className="mid_view">
								<h5>View:</h5>
								<div className="svg_con" onClick={() => SetView('wide')}>
									<svg focusable="false" class="icon icon--list " viewBox="0 0 18 18" role="presentation">
											<path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="currentColor" fill-rule="evenodd"></path>
									</svg>
								</div>
								<div className="svg_con" onClick={() => SetView(false)}>
									<svg focusable="false" class="icon icon--grid " viewBox="0 0 18 18" role="presentation">
										<path d="M1 .030067h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm7-14h2c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .44771525 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.55228475.4477153-1 1-1zm0 7h2c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1z" fill="currentColor" fill-rule="evenodd"></path>
									</svg>
								</div>

							</div>
						</div>
					</div>
					{
					view &&
					<section className={`card_holder view`}>
						{arr.map((it, i) =>  <Card isHome isWide img={data[i + 18].img} name={data[i].name} price={data[i].price} />)}
					</section>
					}

					{
					!view &&
					<section className={`card_holder`}>
						{arr.map((it, i) =>  <Card img={data[i + 18].img} name={data[i].name} price={data[i].price} />)}
					</section>
					}
					
				</section>
			</main>
		</div>
	);
};

export default Products;
