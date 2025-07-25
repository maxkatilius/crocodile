import { Link } from "react-router-dom"

const Home = () => {
	return (
		<main className="home-container">
			<h3 className="subtitle">Snap, Strategize, Sabotage!</h3>
			<p className="tagline">
				When cards meet crocs, chaos ensues! Channel your inner reptile
				in this game of skill, speed, suspense, memory, mischief, and
				yes, some barrel-rolling fun!
			</p>
			<div className="home__links">
				<Link to="/how-to">How to play</Link>
				<Link to="/about">About</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/contact">Contact Us</Link>
			</div>
		</main>
	)
}

export default Home
