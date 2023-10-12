// import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav"
import crocHeaderImg from "../assets/images/sneaky-croc-2-0B6E4F.jpg";

const Header = () => {
	const navigate = useNavigate()
	return (
		<header>
			<div onClick={()=> {navigate("/")}} className="header--logo">
				<img src={crocHeaderImg} className="header--img" />
				<h1 className="header--title">Crocodile</h1>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
