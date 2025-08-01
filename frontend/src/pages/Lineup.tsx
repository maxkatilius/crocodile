import { Link, useNavigate, useLocation } from "react-router-dom"
import CrocCardSaltwaterKing from "../assets/images/card_images/croc-card-saltwater-king--1.png"
import CrocCardSaltwaterThug from "../assets/images/card_images/croc-card-saltwater-thug-13.png"
import CrocCardCrocodamelon from "../assets/images/card_images/croc-card-crocodameleon-0.png"
import CrocCardOrinoco from "../assets/images/card_images/croc-card-orinoco-1.png"
import CrocCardAlligator from "../assets/images/card_images/croc-card-alligator-2.png"
import CrocCardPhillipine from "../assets/images/card_images/croc-card-phillipine-3.png"
import CrocCardFreshwater from "../assets/images/card_images/croc-card-freshwater-4.png"
import CrocCardMorelets from "../assets/images/card_images/croc-card-morelets-5.png"
import CrocCardDwarf from "../assets/images/card_images/croc-card-dwarf-6.png"
import CrocCardGharial from "../assets/images/card_images/croc-card-gharial-9.png"
import CrocCardMugger from "../assets/images/card_images/croc-card-mugger-10.png"
import CrocCardWestAfrican from "../assets/images/card_images/croc-card-west-african-11.png"
import CrocCardNile from "../assets/images/card_images/croc-card-nile-12.png"

const Lineup = () => {
	const navigate = useNavigate()
	const location = useLocation()
		const prevLocation = location.state?.from || "/"
		const path =
			prevLocation === "/how-to/gameplay"
				? "/how-to/calling-croc"
				: "/"
		const nextLocation =
			prevLocation === "/how-to/gameplay"
				? "Calling 'Croc'"
				: "Home"

	return (
		<main className="lineup-container">
			<h1>The Line-Up</h1>
			<div className="croc-cards">
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardSaltwaterKing}
						alt="The King Saltwater Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The King Saltwater Crocodile</h4>
						<p><span className="croc-card-value">Value: -1</span>
							This highly sought after salty is the most valuable
							card on the table. Keep this King hidden or expect 
							relentless snapping from jealous crocs lurking 
							around you. Heavy is the head that holds the crown. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardSaltwaterThug}
						alt="The Thug Saltwater Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Thug Saltwater Crocodile</h4>
						<p><span className ="croc-card-value">Value: 13</span>
							The Saltwater Crocodile that will crunch you. 
							The highest scoring card and arguably the 
							worst on the table.	What is he good for? 
							<span>Taking down the King!</span>
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardCrocodamelon}
						alt="Crocodamelon Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Crocodamelon</h4>
						<p><span className ="croc-card-value">Value: 0</span>
							The second most valuable card. Hang on to this cheeky
							croc! Wait a second that's not a crocodile!
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardOrinoco}
						alt="The Orinoco Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Orinoco Crocodile</h4>
						<p><span className ="croc-card-value">Value: 1</span>
							Hailing all the way from Colombia and Venezuela, this is 
							a nice croc to keep hidden in your hand.
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardAlligator}
						alt="The American Alligator Playing Card"
					/>
					<div className="croc-card-info">
						<h4>2 - The American Alligator</h4>
						<p><span className ="croc-card-value">Value: 2</span>
							Not bad. But as the old sayin goes: 
							<span>2's don't win games.</span> 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardPhillipine}
						alt="The Phillipine Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Phillipine Crocodile</h4>
						<p><span className ="croc-card-value">Value: 3</span>
							He may have style but I wouldn't bank on this croc. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardFreshwater}
						alt="The Freshwater Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Freshwater Crocodile</h4>
						<p><span className ="croc-card-value">Value: 4</span>
							Take it or leave it. Frankly, this 
							laidback croc couldn't care less. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardMorelets}
						alt="The Morelet's Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Morelet's Crocodile</h4>
						<p><span className ="croc-card-value">Value: 5</span>
							This Mexican Croc might just spice the 
							game up when you're least expecting it. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardDwarf}
						alt="The Osborn's Dwarf Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Osborn's Dwarf Crocodile</h4>
						<p><span className ="croc-card-value">Value: 6</span>
							The smallest species of crocodile, isn't he cute?
							Well that's what he wants you to think... 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src="https://res.cloudinary.com/dm8swax4s/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1754027714/croc-card-spectacled-caiman-7_vlbic1.png"
						alt="The Spectacled Caiman Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Spectacled Caiman</h4>
						<p><span className ="croc-card-value">Value: 7</span>
							This sophisticated croc will help you see clearer
							than any other. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src="https://res.cloudinary.com/dm8swax4s/image/upload/f_auto,q_auto,w_auto,dpr_auto/v1754027694/croc-card-false-gharial-8_gytsps.png"
						alt="The False Gharial Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The False Gharial</h4>
						<p><span className ="croc-card-value">Value: 8</span>
							The slim snouted false gharial loves to stay hidden,
							but he always keeps an eye on others. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardGharial}
						alt="The Gharial Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Gharial</h4>
						<p><span className ="croc-card-value">Value: 9</span>
							The most thoroughly aquatic crocodile, this croc
							loves to shake things up underneath the surface. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardMugger}
						alt="The Mugger Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Mugger Crocodile</h4>
						<p><span className ="croc-card-value">Value: 10</span>
							Nuiasnce, sabatouer, saviour? Power is 
							in the hand of the holder.
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardWestAfrican}
						alt="The West African Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The West African Crocodile</h4>
						<p><span className ="croc-card-value">Value: 11</span>
							What a funky crocodile. It's a shame to
							have to get rid of him so quickly. 
						</p>
					</div>
				</div>
				<div className="croc-card">
					<img
						loading="lazy"
						src={CrocCardNile}
						alt="The West African Crocodile Playing Card"
					/>
					<div className="croc-card-info">
						<h4>The Nile Crocodile</h4>
						<p><span className ="croc-card-value">Value: 12</span>
							This crocodile is responsible for the most human deaths,
							and the most losses. Beware! 
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
		</main>
	)
}

export default Lineup