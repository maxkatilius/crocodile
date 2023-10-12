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
				during critical moments of smackdowns and snatchdowns, it's a
				one-hand operation. Ensure only one hand is in action during
				these maneuvers.
			</p>
			<p>
				This means you can't hold a card ready to play while also
				grabbing (or preparing to grab) a face-down card with your other
				hand to smackdown immediately after.
			</p>
			<div className="links-container">
				<button className="back-btn" onClick={() => navigate(-1)}>
					◀ Back
				</button>
				<Link to="../../">Home</Link>
			</div>
		</main>
	);
};

export default Prohibited;
