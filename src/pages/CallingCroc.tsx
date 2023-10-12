// import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CallingCroc = () => {
	const navigate = useNavigate();
	return (
		<main className="calling-croc-container">
			<h2>Ending the game: 'Crocodile!'</h2>
			<p>
				Think you're winning? Call 'Crocodile' or more casually, 'Croc'
				to wrap up. After the call, the final round begins, with every
				player getting one last shot, except the caller.
			</p>
			<p>
				Once the final turn concludes, cards are laid bare. The player
				with the fewest points triumphs.
			</p>
			<p>
				Ideally, a player should call 'Croc' right before ending their
				turn. If 'Croc' is declared during another player's turn, that
				player finishes their current turn and gets another in the final
				round (while the 'Croc' caller sits out).
			</p>
			<p>
				<span>Strategy Tip: </span>While it's generally not recommended,
				in certain strategies, calling 'croc' unexpectedly could be your
				wildcard, knowing you'll forfeit your final turn.
			</p>
			<div className="links-container">
				<button className="back-btn" onClick={() => navigate(-1)}>
					◀ Back
				</button>
				<Link to="../smackdowns">Smackdowns ▶</Link>
			</div>
		</main>
	);
};

export default CallingCroc;
