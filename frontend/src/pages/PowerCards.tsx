import { Link, useNavigate, useLocation } from "react-router-dom"
import CrocCard10 from "../assets/images/card_images/croc-card-10.png"
import CrocCard9 from "../assets/images/card_images/croc-card-9.png"
import CrocCard8 from "../assets/images/card_images/croc-card-8.png"
import CrocCard7 from "../assets/images/card_images/croc-card-7.png"

const PowerCards = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const prevLocation = location.state?.from || "/how-to/prohibited"
	const path =
		prevLocation === "/how-to/gameplay"
			? "../calling-croc"
			: "../prohibited"
	const nextLocation =
		prevLocation === "/how-to/gameplay"
			? "Calling 'Croc'"
			: "Prohibited Plays"

	return (
		<div className="power-cards-container">
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
					<img
						src={CrocCard7}
						alt="The Spectacled Caiman Playing Card - 7"
					/>
					<div className="power-card-info">
						<h4>7 - The Spectacled Caiman: Self-Peek or 'Selfie'</h4>
						<p>Have a peek at one of your own face-down cards.</p>
					</div>
				</div>
				<div className="power-card">
					<img
						src={CrocCard8}
						alt="The False Gharial Playing Card - 8"
						/>
					<div className="power-card-info">
						<h4>8 - The False Gharial: Sneak-a-Peek or 'Sneaky'</h4>
						<p>Sneak a peek at another player's face-down card.</p>
					</div>
				</div>
				<div className="power-card">
					<img
						src={CrocCard9}
						alt="The Mugger Crocodile Playing Card - 9"
					/>
					<div className="power-card-info">
						<h4>9 - The Mugger Crocodile: Blind Swap or 'Switcharoo'</h4>
						<p>
						Mix things up! Swap two face-down cards on the table. It
						can be between your card and another player's, or
						between two other players, sowing confusion.
						</p>
					</div>
				</div>
				<div className="power-card">
					<img
						src={CrocCard10}
						alt="The Nile Crocodile Playing Card - 10"
						/>
					<div className="power-card-info">
						<h4>10 - The Nile Crocodile: Power Swap or 'The Punisher'</h4>
						<p>
							The ultimate power play! View one of your cards and
							another player's card. Decide to swap them or not. It's
							a combination of all previous power cards in one.
						</p>
					</div>
				</div>
			</div>
			<div className="links-container">
				<button className="btn back-btn" onClick={() => navigate(-1)}>
					<span className="arrow left" />
					<span className="button-text">Back</span>
				</button>
				<Link to={path}>
					{nextLocation}
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	)
}

export default PowerCards
