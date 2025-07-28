import { Link } from "react-router-dom"

const About = () => {
	return (
		<main className="about-container">
			<h1>The Crocodile Tale</h1>
			<div className="about-text">
				<p>
					In 2016 as I journeyed through the vivid landscapes of South-East Asia as a 19-year old boy, 
					full of wonder, hopping from bustling cities to tranquil towns, I found myself meeting many 
					new people, and playing many new games across a myriad of hostels. 
				</p>
				<p>
					It was on one such evening,
					in a dimly lit common room, that I stumbled upon a captivating scene – a group of travelers 
					engrossed in a card game. Curiosity piqued, I joined them, unaware that this moment would change 
					my life as I knew it.
				</p>

				<p>
					At first, I was a mere novice amidst the seasoned players. I grappled with the swift pace of the 
					smackdowns and struggled to keep track of the various cards flitting across the table. Yet, as 
					rounds progressed, something clicked. I began anticipating moves, plotting strategies, and expertly 
					smacking down cards with finesse. Before I knew it, hours had passed, and I was fully immersed in 
					the game. I made sure to play it at every remaining opportunity of my trip.
				</p>

				<p>
					Upon returning home, I introduced the game to my friends and like me, they were hooked. Playing 
					night after night, we introduced twists and tweaks, gradually evolving the game into what it is 
					today. From those humble beginnings, the enhanced and exhilarating version of Crocodile was born.
				</p>

				<p>
					Now, it's your turn to dive into this whirlwind of strategy, suspense, and spirited competition. 
					Ready for some adrenaline-pumping action? The crocs are eager to meet you!
				</p>
			</div>

			<div className="about-links">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/how-to">How to play</Link>
			</div>
		</main>
	);
};

export default About;

