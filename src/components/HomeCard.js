import React from "react";
import "./HomeCard.css";

const HomeCard = ({ img, head, text, a }) => {
	return (
		<div className="homecard">
			<img className="homecard-logo" src={img} alt="ns" />
			<h2 className="homecard-head">{head}</h2>
			<p>{text}</p>
			{a && <a href="https://www.affirm.com/apps/prequal/?public_api_key=NQEPJXXJDDBSR1IC&device_id=79e8e7fc-fae2-44bd-9bb2-6c32acd253ca&referring_url=https%253A%252F%252Fbitcoinmerch.com%252F&use_promo=true&page_type=banner&locale=en_US">{a}</a>}
		</div>
	);
};

export default HomeCard;
