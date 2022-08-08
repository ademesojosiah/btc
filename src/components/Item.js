import React from "react";
import "./Item.css";

const Item = ({ svg, header, text }) => {
	return (
		<div className="items">
			<div className="svg">{svg}</div>
			<div className="img-info">
				<h2 className="info-header">{header}</h2>
				<p className="info-text">{text}</p>
			</div>
		</div>
	);
};

export default Item;
