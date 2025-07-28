import { Link, useNavigate } from "react-router-dom";
import KingOfHearts from "../assets/images/card_images/king_of_hearts.png";
import Joker from "../assets/images/card_images/joker.png";
import AceOfSpades from "../assets/images/card_images/ace_of_spades.png";
import TwoOfDiamonds from "../assets/images/card_images/2_of_diamonds.png";
import ThreeOfHearts from "../assets/images/card_images/3_of_hearts.png";
import QueenOfClubs from "../assets/images/card_images/queen_of_clubs.png";

const CardValues = () => {
	const navigate = useNavigate();

	return (
		<div className="card-values-container">
			<h2> Card Values</h2>
			<div className="playing-cards">
				<div className="playing-card">
					<img
						src={KingOfHearts}
						alt="King of hearts playing card."
					/>
					<div className="playing-card-info">
						<h4>Red King</h4>
						<p><span className="playing-card-value">Value: -1</span>
							The most valuable card on the table. 
							Keep this in your hand and try to not let
							any crocs catch scent of it.
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={QueenOfClubs}
						alt="Queen of clubs playing card."
					/>
					<div className="playing-card-info">
						<h4>Any other face card</h4>
						<p><span className ="playing-card-value">Value: 10</span>
							The highest scoring card and 
							arguably the worst on the table. 
							What good are they for? 
							<span>Smackdowns, actually.</span>
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={Joker}
						alt="Joker playing card."
					/>
					<div className="playing-card-info">
						<h4>Joker</h4>
						<p><span className ="playing-card-value">Value: 0</span>
							The second most valuable card. 
							Hang on to this one.
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={AceOfSpades}
						alt="Ace of spades playing card."
					/>
					<div className="playing-card-info">
						<h4>Ace</h4>
						<p><span className ="playing-card-value">Value: 1</span>
							Aces are a nice card to keep in your hand.
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={TwoOfDiamonds}
						alt="2 of diamonds playing card."
					/>
					<div className="playing-card-info">
						<h4>2</h4>
						<p><span className ="playing-card-value">Value: 2</span>
							Not bad. But as the old sayin goes: 
							<span>2's don't win games.</span>
						</p>
					</div>
				</div>
				<div className="playing-card">
					<img
						src={ThreeOfHearts}
						alt="3 of hearts playing card."
					/>
					<div className="playing-card-info">
						<h4>3</h4>
						<p><span className ="playing-card-value">Value: 3</span>
							I wouldn't bank on this. 
							Card values reflect the 
							value seen on the face of the 
							card from here on out. 
							<span>4 = 4, 5 = 5 and so on.</span>
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
