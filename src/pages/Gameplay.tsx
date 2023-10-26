// import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Gameplay = () => {
	const navigate = useNavigate();
	return (
		<main className="gameplay-container">
			<h2>Playing the game</h2>
			<p>
				The player to the dealer's left kicks off the game. They have
				two options:
			</p>
			<ul className="croc-ul">
				<li className="croc-li">Draw the top card from the deck.</li>
				<li className="croc-li">
					Swap one of their face-down cards directly with the face-up
					card on the discard pile.
				</li>
			</ul>
			<p>
				Players, in turn, aim to collect the lowest scoring cards (see{" "}
				<span
					className="link-card-values"
					onClick={() => {
						navigate("../card-values", {
							state: { from: "/how-to/gameplay" },
						});
					}}
				>
					card values
				</span>
				) for their face-down hand by either drawing or swapping.
			</p>
			<p>When drawing a fresh card from the deck a player can:</p>
			<ul className="croc-ul">
				<li className="croc-li">
					Use it if it's a Power Card (see{" "}
					<span
						className="link-power-cards"
						onClick={() => {
							navigate("../power-cards", {
								state: { from: "/how-to/gameplay" },
							});
						}}
					>
						power Cards
					</span>
					),
				</li>
				<li className="croc-li">
					Swap it with one of their face-down cards,
					<span className="bold"> or</span>
				</li>
				<li className="croc-li">Simply discard it.</li>
			</ul>
			<p>
				The game can be concluded by any player declaring 'Crocodile.'
				This announcement triggers the final round, followed by the
				scoring phase. Alternatively, the game can end when one player
				'does the deed'.
			</p>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					◀ Back
				</button>
				<Link to="../calling-croc">Calling 'Croc' ▶</Link>
			</div>
		</main>
	);
};

export default Gameplay;
