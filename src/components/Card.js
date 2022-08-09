import React from "react";
import "./Card.css";

const Card = ({ isHome, isWide }) => {
	return (
		<div className={`card ${isWide && "wide"}`}>
			<img
				className={`card-image ${isHome && "home"}`}
				src="https://cdn.shopify.com/s/files/1/2609/9556/products/20211019_131153_300x.jpg?v=1634677091"
				alt="so"
			/>
			<div>
				<p className={`card-name ${isWide && "wide"}`}>
					GekkoScience COMPAC F + Fan Upgrade - COMBO Up to 350GH/s
				</p>
				<p className="card-price">$248.99</p>
			</div>
				<section className={`card-button-con ${isWide && "wide"}`}>
					<button className="card-button">ADD TO CART</button>
					<button className="card-button">VIEW</button>
				</section>
		</div>
	);
};

export default Card;
