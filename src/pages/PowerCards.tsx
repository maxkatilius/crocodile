// import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const PowerCards = () => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	const prevLocation = location.state?.from || "/how-to/prohibited";
	const path =
		prevLocation === "/how-to/gameplay"
			? "../calling-croc"
			: "../prohibited";
	const nextLocation =
		prevLocation === "/how-to/gameplay"
			? "Calling 'Croc' ▶"
			: "Prohibited Plays ▶";

	return (
		<main className="power-cards-container">
			<h2>Power cards</h2>
			<p>
				Use power cards by playing them directly onto the discard pile
				after drawing them.
			</p>
			<p>
				Any power card played from a face-down position or during a
				smackdown have no power.
			</p>
			<div className="power-cards">
				<div className="power-card">
					<h4>7 - The Self-Peek or 'Selfie'</h4>
					<img
						className="7-clubs-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_7.svg"
						alt="7 of clubs playing card."
					/>
					<p>Have a peek at one of your own face-down cards.</p>
				</div>
				<div className="power-card">
					<h4>8 - The Sneak-a-Peek or 'Sneaky'</h4>
					<img
						className="8-diamionds-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg"
						alt="8 of diamonds playing card."
					/>
					<p>Sneak a peek at another player's face-down card.</p>
				</div>
				<div className="power-card">
					<h4>9 - The Blind Swap or 'Switcharoo'</h4>
					<img
						className="9-spades-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_9.svg"
						alt="9 of spades playing card."
					/>
					<p>
						Mix things up! Swap two face-down cards on the table. It
						can be between your card and another player's, or
						between two other players, sowing confusion.
					</p>
				</div>
				<div className="power-card">
					<h4>10 - The Power Swap or 'The Punisher'</h4>
					<img
						className="10-hearts-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_10.svg"
						alt="10 of hearts playing card."
					/>
					<p>
						The ultimate power play! View one of your cards and
						another player's card. Decide to swap them or not. It's
						a combination of all previous power cards in one.
					</p>
				</div>
			</div>
			<div className="links-container">
				<button className="back-btn" onClick={() => navigate(-1)}>
					◀ Back
				</button>
				<Link to={path}>{nextLocation}</Link>
			</div>
		</main>
	);
};

export default PowerCards;
