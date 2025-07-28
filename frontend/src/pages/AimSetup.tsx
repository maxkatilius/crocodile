import { Link } from "react-router-dom";

const AimSetup = () => {
	return (
		<div className="aim-container">
			<h2>Aim of the game</h2>
			<p>
				Be the player with the fewest points at the end of the round
				<strong> OR</strong> empty your hand first,
				otherwise known as 'doing the deed'.
			</p>
			<h2>Setup</h2>
			<p>Each player is dealt four cards face-down in a 2x2 square.</p>
			<p>
				For a classic deal, give out two cards (the bottom row) to each
				player first, followed by the next two (the top row). However,
				deal in any order you prefer.
			</p>
			<p>
				After all players have their cards, the dealer flips the top
				card from the deck to start the discard pile.
			</p>
			<p>
				Players peek at the two cards closest to them, leaving 
				the furthest two a mystery.
				Once everyone has checked their cards, the game begins.
			</p>
			<p>OPTIONAL RULE: Wait until after the dealer has flipped the 
				starting card to look at your own cards - jump the gun and 
				incur an extra penalty card before the game has even started. 
				Lull your friends into a false sense of security and then 
				punish them.
			</p>
			<div className="links-container">
				<Link to="/" >
					<span className="arrow left" />
					<span className="button-text">Home</span>
				</Link>
				<Link to="/how-to/gameplay" >
					<span className="button-text">Gameplay</span>
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default AimSetup
