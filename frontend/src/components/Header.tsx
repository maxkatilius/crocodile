import { useState, useEffect } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import crocHeaderImgGreen from "../assets/images/logos/sneaky-croc-2-0B6E4F.jpg"
import crocHeaderImgWhite from "../assets/images/logos/sneaky-croc-2-white-transparent.png"

const Header = () => {

	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
	const navigate = useNavigate()

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return (
		<header>
			<div className="header__logo">
				<img onClick={()=> navigate("/")} src={screenWidth < 768 ? crocHeaderImgGreen : crocHeaderImgWhite} />
				<h1 onClick={()=> navigate("/")}>CROCODILE</h1>
			</div>
			{screenWidth < 768 
			?	<MobileNav />
			:	<DesktopNav />
			}
		</header>
	)
}

export default Header
