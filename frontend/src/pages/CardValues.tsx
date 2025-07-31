import { Link, useNavigate } from "react-router-dom";
import CrocCardFreshwater from "../assets/images/card_images/croc-card-freshwater.png";
import CrocCardCrocodamelon from "../assets/images/card_images/croc-card-crocodameleon.png";
import CrocCardOrinoco from "../assets/images/card_images/croc-card-orinoco.png";
import CrocCardAlligator from "../assets/images/card_images/croc-card-alligator.png";
import CrocCardPhillipine from "../assets/images/card_images/croc-card-phillipine.png";
import CrocCardSaltwater from "../assets/images/card_images/croc-card-saltwater.png";
// import CrocCardNile from "../assets/images/card_images/croc-card-nile.png";

const CardValues = () => {
	const navigate = useNavigate();

	return (
		<div className="card-values-container">
			<h2> Card Values</h2>
			<div className="playing-cards">
				<div className="playing-card">
					<img
						src={CrocCardFreshwater}
						alt="Saltwater Crocodile Playing Card - -1"
					/>
					<div className="playing-card-info">
						<h4>The Freshwater Crocodile</h4>
						<p><span className="playing-card-value">Value: -1</span>
							The most valuable card on the table. 
							Keep this salty in your hand and try 
							to not let any others catch scent of it.
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={CrocCardSaltwater}
						alt="The Saltwater Crocodile Playing Card - 10"
					/>
					<div className="playing-card-info">
						<h4>The Big Boys</h4>
						<p><span className ="playing-card-value">Value: 10</span>
							The Saltware, Nile, and American Crocodiles.
							You will find 10 of these heavy hitters
							throughout the pack. The highest scoring card and 
							arguably the worst on the table. 
							What are they good for? 
							<span>Smackdowns, actually.</span>
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={CrocCardCrocodamelon}
						alt="Crocodamelon Playing Card - 0"
					/>
					<div className="playing-card-info">
						<h4>The Crocodamelon</h4>
						<p><span className ="playing-card-value">Value: 0</span>
							The second most valuable card. Hang on to this cheeky
							croc! Wait a second that's not a crocodile?
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={CrocCardOrinoco}
						alt="The Orinoco Crocodile Playing Card - 1"
					/>
					<div className="playing-card-info">
						<h4>The Orinoco Crocodile</h4>
						<p><span className ="playing-card-value">Value: 1</span>
							A nice croc to keep hidden in your hand.
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={CrocCardAlligator}
						alt="The American Alligator Playing Card- 2"
					/>
					<div className="playing-card-info">
						<h4>2 - The American Alligator</h4>
						<p><span className ="playing-card-value">Value: 2</span>
							Not bad. But as the old sayin goes: 
							<span>2's don't win games.</span> 
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={CrocCardPhillipine}
						alt="The Phillipine Crocodile Playing Card - 3"
					/>
					<div className="playing-card-info">
						<h4>3 - The Phillipine Crocodile</h4>
						<p><span className ="playing-card-value">Value: 3</span>
							I wouldn't bank on this croc. 
							Cards are worth the value as pictured on the card,
							you've got the hang of it by now.
						</p>
					</div>
				</div>
			</div>
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

export default CardValues;
