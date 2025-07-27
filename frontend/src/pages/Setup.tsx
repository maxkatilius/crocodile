import { Link, useNavigate } from "react-router-dom";

const Setup = () => {
	const navigate = useNavigate();
	return (
		<div className="setup-container">
			<h2>Setup</h2>
			<div className="setup-text">
				<p>Each player is dealt four cards face-down in a 2x2 square. </p>
				<p>
					For a classic deal, give out two cards (the bottom row) to each
					player first, followed by the next two (the top row). However,
					deal in any order you prefer.
				</p>
				<p>
					After all players have their cards, the dealer flips the top
					card from the deck to start the discard pile. Players peek at
					the two cards closest to them, leaving the furthest two a
					mystery.
				</p>
				<p>Once everyone's checked their cards, the game begins.</p>
			</div>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					<span className="arrow left" />
					<span className="button-text">Back</span>
				</button>
				<Link to="../gameplay">
					<span className="button-text">Gameplay</span>
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default Setup;
