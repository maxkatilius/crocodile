import { Link, useNavigate, useLocation } from "react-router-dom"
import CrocCardGharial from "../assets/images/card_images/croc-card-gharial-9.png"
import CrocCardMugger from "../assets/images/card_images/croc-card-mugger-10.png"

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
						loading="lazy"
						src="https://res.cloudinary.com/dm8swax4s/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1754027714/croc-card-spectacled-caiman-7_vlbic1.png"
						alt="The Spectacled Caiman Playing Card - 7"
					/>
					<div className="power-card-info">
						<h4>7 - The Spectacled Caiman: Self-Peek or 'Selfie'</h4>
						<p>Have a peek at one of your own face-down cards.</p>
					</div>
				</div>
				<div className="power-card">
					<img
						loading="lazy"
						src="https://res.cloudinary.com/dm8swax4s/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1754027694/croc-card-false-gharial-8_gytsps.png"
						alt="The False Gharial Playing Card - 8"
						/>
					<div className="power-card-info">
						<h4>8 - The False Gharial: Sneak-a-Peek or 'Sneaky'</h4>
						<p>Sneak a peek at another player's face-down card.</p>
					</div>
				</div>
				<div className="power-card">
					<img
						loading="lazy"
						src={CrocCardGharial}
						alt="The CrocCardMugger Crocodile Playing Card - 9"
					/>
					<div className="power-card-info">
						<h4>9 - The Gharial: Blind Swap or 'Switcharoo'</h4>
						<p>
						Mix things up! Swap two face-down cards on the table. It
						can be between your card and another player's, or
						between two other players, sowing confusion.
						</p>
					</div>
				</div>
				<div className="power-card">
					<img
						loading="lazy"
						src={CrocCardMugger}
						alt="The Nile Crocodile Playing Card - 10"
						/>
					<div className="power-card-info">
						<h4>10 - The Mugger Crocodile: Power Swap or 'The Punisher'</h4>
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
