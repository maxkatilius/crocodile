import { useState } from "react"
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
					<h3 className="nav--how-to" onClick={() => {
						toggleHowTo();
					}}>How to Play
					</h3>
					<ul className={`how-to-links croc-ul ${howToOpen ? "open" : "closed"}`}>
						<li className="croc-li nav-li" style={{backgroundColor: "none"}}>
							<NavLink to="/how-to" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Aim</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/setup" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Setup</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/gameplay" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Gameplay</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/card-values" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Card Values</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/calling-croc" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Calling Croc</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/smackdowns" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Smackdowns</NavLink>
							</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/power-cards" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Power Cards</NavLink>
						</li>
						<li className="croc-li nav-li">
							<NavLink to="/how-to/prohibited" onClick={() => {
								toggleNav()
								toggleHowTo();
							}}>Prohibited Plays</NavLink>
						</li> 
					</ul>
				</div>
				<NavLink to="/contact" onClick={() => {
						toggleNav();
					}}>Contact us</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
