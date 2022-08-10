import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ isHome, isWide, img, name, price, id }) => {
	return (
		<div className={`card ${isWide && "wide"}`}>
			<img
				className={`card-image ${isHome && "home"}`}
				src={img}
				alt="so"
			/>
			<div>
				<p className={`card-name ${isWide && "wide"}`}>
					{name}
				</p>
				<p className="card-price">${price}</p>
			</div>
				<section className={`card-button-con ${isWide && "wide"}`}>
					<Link to='/cart'><button className="card-button">ADD TO CART</button></Link>
					<Link to={`/product/${id}`} ><button className="card-button">VIEW</button></Link>
				</section>
		</div>
	);
};

export default Card;
