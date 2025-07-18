// import React from "react";
import { Link } from "react-router-dom";

const Aim = () => {
	return (
		<main className="aim-container">
			<h2>Aim of the game</h2>
			<p>
				Be the player with the fewest points at the end of the round
				<strong> OR</strong> empty your hand first,
				otherwise known as 'doing the deed'.
			</p>
			<div className="links-container">
				<Link className="link--setup" to="../">
					◀ Home
				</Link>
				<Link className="link--setup" to="../how-to/setup">
					Setup ▶
				</Link>
			</div>
		</main>
	);
};

export default Aim;
