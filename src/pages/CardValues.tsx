// import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CardValues = () => {
	const navigate = useNavigate();

	return (
		<main className="card-values-container">
			<h2> Card Values</h2>
			<div className="cards">
				<div className="card">
					<h4>Red Kings = -1</h4>
					<img
						className="red-king-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_king.svg"
						alt="King of hearts playing card."
					/>
				</div>
				<div className="card">
					<h4>Jokers = 0</h4>
					<img
						className="joker-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/joker_black.svg"
						alt="Joker playing card."
					/>
				</div>
				<div className="card">
					<h4>Ace = 1</h4>
					<img
						className="ace-clubs-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_ace.svg"
						alt="Ace of clubs playing card."
					/>
				</div>
				<div className="card">
					<h4>
						2 = 2,
						<br />
						<span>and so on and so forth...</span>
					</h4>
					<img
						className="2-diamonds-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_2.svg"
						alt="2 of diamonds playing card."
					/>
				</div>
				<div className="card">
					<h4>Any other face card = 10</h4>
					<img
						className="queen-spades-img"
						src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/spades_queen.svg"
						alt="2 of diamonds playing card."
					/>
				</div>
				<div className="links-container">
					<button className="btn back-btn" onClick={() => navigate(-1)}>
						◀ Back
					</button>
					<Link to="../calling-croc">Calling 'Croc' ▶</Link>
				</div>
			</div>
		</main>
	);
};

export default CardValues;
