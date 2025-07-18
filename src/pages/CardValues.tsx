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
		<main className="card-values-container">
			<h2> Card Values</h2>
			<div className="cards">
				<div className="card">
					<h4>Red Kings = -1</h4>
					<img
						src={KingOfHearts}
						alt="King of hearts playing card."
					/>
				</div>
				<div className="card">
					<h4>Jokers = 0</h4>
					<img
						src={Joker}
						alt="Joker playing card."
					/>
				</div>
				<div className="card">
					<h4>Ace = 1</h4>
					<img
						src={AceOfSpades}
						alt="Ace of spades playing card."
					/>
				</div>
				<div className="card">
					<h4>
						2 = 2
					</h4>
					<img
						src={TwoOfDiamonds}
						alt="2 of diamonds playing card."
					/>
				</div>
				<div className="card">
					<h4>
						3 = 3, etc
					</h4>
					<img
						src={ThreeOfHearts}
						alt="3 of hearts playing card."
					/>
				</div>
				<div className="card">
					<h4>Any other face card = 10</h4>
					<img
						src={QueenOfClubs}
						alt="Queen of clubs playing card."
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
