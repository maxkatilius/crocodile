import { Link } from "react-router-dom";

const Aim = () => {
	return (
		<div className="aim-container">
			<h2>Aim of the game</h2>
			<p>
				Be the player with the fewest points at the end of the round
				<strong> OR</strong> empty your hand first,
				otherwise known as 'doing the deed'.
			</p>
			<div className="links-container">
				<Link to="/" >
					<span className="arrow left" />
					<span className="button-text">Home</span>
				</Link>
				<Link to="/how-to/setup" >
					<span className="button-text">Setup</span>
					<span className="arrow right" />
				</Link>
			</div>
		</div>
	);
};

export default Aim;
