import React from "react";
import "./Coin.css";

const Coin = ({ img, name }) => {
	return (
		<div className="coin">
			<div className="coin-case">
				<img className="coin-img" src={img} alt="s" />
			</div>
			<p className="coin-name">{name}</p>
		</div>
	);
};

export default Coin;
