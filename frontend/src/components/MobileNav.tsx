import { useState } from "react"
import { NavLink } from "react-router-dom"
import CartImg from "../assets/images/cart-green.png"

const MobileNav = () => {
	const [navOpen, setNavOpen] = useState(false)
	const [howToOpen, setHowToOpen] = useState(false)
	
	const cartCount = JSON.parse(localStorage.getItem("cart") ?? "[]").length

	const toggleNav = () => {
		setNavOpen((prevState) => !prevState)
	}

	const toggleHowTo = () => {
		setHowToOpen((prevState) => !prevState)
	}

	return (
		<nav className={`mobile__nav ${navOpen ? "open" : "closed"}`}>
			<NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
				<span className="mobile__nav-cart-img-container">
					<img src={CartImg} />
					<span className="cart-count">{cartCount}</span>
					<span className="underline"></span>
				</span>
			</NavLink>
			<div className="mobile__nav__barrier"></div>
			<div
				className={`hamburger-container`}
				onClick={toggleNav}
			>
				<div className={`hamburger`}></div>
			</div>
			<div className="mobile__nav__links">
				<NavLink to="/" onClick={() => {
						toggleNav()
				}}>
					Home
				</NavLink>
				<NavLink to="/about" onClick={() => {
						toggleNav()
				}}>
					About
				</NavLink>
				<NavLink to="/shop" onClick={() => {
						toggleNav()
				}}>
					Shop
				</NavLink>
				<div>
					<h3 className="mobile__nav__how-to" onClick={() => {
						toggleHowTo()
					}}>How to Play
					</h3>
					<ul className={`mobile__nav__how-to-links ${howToOpen ? "open" : "closed"}`}>
						<li style={{backgroundColor: "none"}}>
							<NavLink to="/how-to" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Aim
							</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/setup" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Setup
							</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/gameplay" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Gameplay
							</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/card-values" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Card
								Values</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/calling-croc" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Calling Croc
							</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/smackdowns" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Smackdowns
							</NavLink>
							</li>
						<li>
							<NavLink to="/how-to/power-cards" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Power Cards
							</NavLink>
						</li>
						<li>
							<NavLink to="/how-to/prohibited" onClick={() => {
								toggleNav()
								toggleHowTo()
							}}>
								Prohibited Plays
							</NavLink>
						</li> 
					</ul>
				</div>
				<NavLink to="/contact" onClick={() => {
						toggleNav()
					}}>
						Contact us
				</NavLink>
			</div>
		</nav>
	)
}

export default MobileNav
