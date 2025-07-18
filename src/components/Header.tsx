// import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav"
import crocHeaderImg from "../assets/images/sneaky-croc-2-0B6E4F.jpg";

const Header = () => {
	const navigate = useNavigate()

	return (
		<header>
			<div className="header--logo">
				<img onClick={()=> navigate("/")} src={crocHeaderImg} />
				<h1 onClick={()=> navigate("/")}>Crocodile</h1>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
