// import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main className="home-container">
			<h3 className="subtitle">Snap, Strategize, Sabotage!</h3>
			<p className="tagline">
				When cards meet crocs, chaos ensues! Channel your inner reptile
				in this game of skill, speed, suspense, memory, mischief, and
				yes, some barrel-rolling fun!
			</p>
			<Link to="/how-to">How to play</Link>
		</main>
	);
};

export default Home;
