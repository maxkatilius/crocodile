// import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Prohibited = () => {
	const navigate = useNavigate();
	return (
		<main className="prohibited-plays-container">
			<h2>Prohibited Plays</h2>
			<h4>The Clarkey Two-Hand</h4>
			<p>
				While you can switch hands or use both during general gameplay,
				during critical moments of smackdowns / snatchdowns, it's a
				one-hand operation. Ensure only one hand is in action during
				these maneuvers.
			</p>
			<p>
				This means you can't hold a card ready to play while also
				grabbing (or preparing to grab) a face-down card with your other
				hand to smackdown immediately afterwards.
			</p>
			<h4>The Disinterested Swan</h4>
			<p>
				For those swanning around neglecting the game's spirit, beware! Forgot a card's power because you snoozed during the rules? Well, fellow crocs might just mislead you. After all in crocodile territory, a distracted swan is an easy snack! 
			</p>
			<p>
				e.g. "This 10 card has a power, right?" <br />"Na mate, just a regular old card! Would've known if you were tuned in."
			</p>
			<p>
				But! Should the swan shake off its apathy, dive into the rulebook or otherwise demonstrate respect for the game, they're back in with full honors (and free from the swan label).
			</p>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					◀ Back
				</button>
				<Link to="../../">Home</Link>
			</div>
		</main>
	);
};

export default Prohibited;
