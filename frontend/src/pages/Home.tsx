import { Link } from "react-router-dom"

const Home = () => {
	return (
		<main className="home-container">
			<div className="home-text">
				<h1 className="subtitle">Snap, Strategize, Sabotage!</h1>
				<p className="tagline">
					When cards meet crocs, chaos ensues! Channel your inner reptile
					in this game of skill, speed, suspense, memory, mischief, and
					yes, some barrel-rolling fun!
				</p>
			</div>
			<div className="home-links">
				<Link to="/how-to">How to Play</Link>
				<Link to="/about">About</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/lineup">Meet the Crocs</Link>
				<Link to="/contact">Contact Us</Link>
			</div>
		</main>
	)
}

export default Home
