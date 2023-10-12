// import React from "react";
import { Link } from "react-router-dom";
import crocHeaderImg from "../assets/images/sneaky-croc-2-0B6E4F.jpg";

const Header = () => {
	return (
		<header>
			<Link to="/" className="header--link">
				<img src={crocHeaderImg} className="header--img" />
				<h1 className="header--title">Crocodile</h1>
			</Link>
		</header>
	);
};

export default Header;
