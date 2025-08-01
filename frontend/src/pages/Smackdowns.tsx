import { Link, useNavigate } from "react-router-dom"

const Smackdowns = () => {
	const navigate = useNavigate();
	return (
		<div className="smackdowns-container">
			<h2>Smackdowns</h2>
			<h4>The Basics</h4>
			<p>
				Any time a card lands face-up on the discard pile (excluding the
				initial card flipped by the dealer), and a player knows that
				another identical face-down card exists on the table, they can
				swiftly grab it and "smack it down" atop the discard pile.
			</p>
			<p>
				If you know of a face-down card identical to the face-up card
				atop the discard pile, snatch it swiftly and slam it down.
			</p>
			<p>Depending on whose card you smacked down:</p>
			<ul>
				<li>
					Yours? It stays out, reducing your hand size, boosting your
					chance to win, and getting you one step closer to doing the
					deed.
				</li>
				<li>
					An oppenent's? They draw a replacement card that remains
					face-down while you discard any one of your face-down cards.
				</li>
				<li>
					The wrong card? Beware of your memory failing you. Smackdown
					the wrong card and a penalty face-down card is added to your
					hand, significanlty hindering your chance to win.
				</li>
			</ul>
			<h4>Speed is key</h4>
			<p>
				If multiple players attempt a smackdown at the same time, only
				the first to the pile is deemed successful. Latecomers to the
				party inadvertently reveal the location and identity of one of
				their cards.
			</p>
			<h4>Doing the deed</h4>
			<p>
				Perform enough smackdowns to empty your hand, and you’ve 'done
				the deed', ending the round with an instant win!
			</p>
			<p>
				The only time a deed can be undone is if someone is holding a  
				<span className="royal-croc"> Royal Croc</span>: 
				A perfect full hand worth -2 in total. 
				Complete with the two King Saltwater Crocodiles, and the two Crocodameleons.
			</p>
			<h4>Chaining Smackdowns</h4>
			<p>
				Players can string together multiple smackdowns if they know of
				multiple identical cards on the table.
			</p>
			<p>
				However, a player cannot chain another player's card onto their
				first smackdown, if that other player lost the initial smackdown
				race with that card.
			</p>
			<p>
				Player's are allowed to sufficiently 'defend' their cards if
				they are late to the smackdown party, but are aware that the
				performer of the smackdown is hungry to add their card in a
				smackdown chain.
			</p>
			<h4>The 'Snatchdown'</h4>
			<p>
				If a player is sufficiently slow or sloppy when smacking down
				their card, opponents can pounce like opportunistic crocodiles,
				'snatching' the card from the smackdowner's hand mid-smackdown,
				claiming it as their own!
			</p>
			<p>
				This maneuver risks card damage, so establish the
				inclusion/exclusion of this rule beforehand. If included,
				execute with care, finesse, and utmost respect.
			</p>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					<span className="arrow left" />
					<span className="button-text">Back</span>
				</button>
				<Link to="../power-cards">
					<span className="button-text">Power Cards</span>
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default Smackdowns;
