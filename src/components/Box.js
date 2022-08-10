import React, { useState } from "react";
import "./Box.css";
import Card from "./Card";
import { useEffect } from "react";
import data  from "../data";
import { Link } from "react-router-dom";

const Box = ({ header, elements, title }) => {
	const [value, setValue] = useState(0);


	const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	return (
		<div className="box">
			<div className="box-head">
				<header className="box-header">{title}</header>
				<Link to='/products'><h3 className="box-htext">View all</h3></Link>
			</div>

			<div className="box-card-con">
				{arr.map(
					(item, i) =>
						<Card isHome img={data[i+1].img} name={data[i+1].name} price={data[i+1].price} id={data[i+1].id} />
						// <>sd</>
				)}
			</div>
		</div>
	);
};

export default Box;
