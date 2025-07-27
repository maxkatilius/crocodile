import { Link, useNavigate } from "react-router-dom";

const Gameplay = () => {
	const navigate = useNavigate();
	return (
		<div className="gameplay-container">
			<h2>Playing the game</h2>
			<p>
				The player to the dealer's left kicks off the game. They have
				two options:
			</p>
			<ul>
				<li>Draw the top card from the deck.</li>
				<li>
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
			<ul>
				<li>
					Use it if it's a Power Card (see{" "}
					<span
						className="link-power-cards"
						onClick={() => {
							navigate("/how-to/power-cards", {
								state: { from: "/how-to/gameplay" },
							});
						}}
					>
						power cards
					</span>
					),
				</li>
				<li>
					Swap it with one of their face-down cards,
					<strong> or,</strong>
				</li>
				<li>Simply discard it.</li>
			</ul>
			<p>
				The game can be concluded by any player declaring 'Crocodile.'
				This announcement triggers the final round, followed by the
				scoring phase. Alternatively, the game can end when one player
				'does the deed'.
			</p>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					<span className="arrow left" />
					<span className="button-text">Back</span>
				</button>
				<Link to="/how-to/calling-croc">
					<span className="button-text">Calling 'Croc'</span>
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default Gameplay;
