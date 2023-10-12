// import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/shop">Shop</NavLink>
			<NavLink to="/how-to">
				<h3>How to Play</h3>
				<div className="nav--how-to">
					<NavLink to="aim">Aim</NavLink>
					<NavLink to="setup">Setup</NavLink>
					<NavLink to="gameplay">Gameplay</NavLink>
					<NavLink to="card-values">Card Values</NavLink>
					<NavLink to="calling-croc">CallingCroc</NavLink>
					<NavLink to="smackdowns">Smackdowns</NavLink>
					<NavLink to="power-cards">Power Cards</NavLink>
					<NavLink to="prohibited">Prohibited Plays</NavLink>
				</div>
			</NavLink>
			<NavLink to="/contact">Contact us</NavLink>
		</nav>
	);
};

export default Nav;
