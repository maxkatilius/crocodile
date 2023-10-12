import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [navOpen, setNavOpen] = useState(false)
	const [howToOpen, setHowToOpen] = useState(false)
	

	const toggleNav = () => {
		setNavOpen((prevState) => !prevState);
	};

	const toggleHowTo = () => {
		setHowToOpen((prevState) => !prevState);
	};

	return (
		<nav className={`nav ${navOpen ? "open" : "closed"}`}>
			<div
				className={`hamburger-container`}
				onClick={toggleNav}
			>
				<div
					className={`hamburger`}
				></div>
			</div>
			<div className="nav--links">
				<NavLink to="/" onClick={() => {
						toggleNav();
					}}>Home</NavLink>
				<NavLink to="/about" onClick={() => {
						toggleNav();
					}}>About</NavLink>
				<NavLink to="/shop" onClick={() => {
						toggleNav();
					}}>Shop</NavLink>
				<div>
					<NavLink to="/how-to" className="nav--how-to" onClick={() => {
						toggleHowTo();
						console.log("clicked!")
					}}>How to Play</NavLink>
					<div className={`how-to-links ${howToOpen ? "open" : "closed"}`}>
						<NavLink to="/how-to" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Aim</NavLink>
						<NavLink to="/how-to/setup" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Setup</NavLink>
						<NavLink to="/how-to/gameplay" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Gameplay</NavLink>
						<NavLink to="/how-to/card-values" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Card Values</NavLink>
						<NavLink to="/how-to/calling-croc" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>CallingCroc</NavLink>
						<NavLink to="/how-to/smackdowns" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Smackdowns</NavLink>
						<NavLink to="/how-to/power-cards" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Power Cards</NavLink>
						<NavLink to="/how-to/prohibited" onClick={() => {
						toggleNav()
						toggleHowTo();
					}}>Prohibited Plays</NavLink>
					</div>
				</div>
				<NavLink to="/contact" onClick={() => {
						toggleNav();
					}}>Contact us</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
