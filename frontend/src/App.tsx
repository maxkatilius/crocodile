import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"
import HowTo from "./components/HowTo"
import Aim from "./pages/Aim"
import Setup from "./pages/Setup"
import Gameplay from "./pages/Gameplay"
import CardValues from "./pages/CardValues"
import CallingCroc from "./pages/CallingCroc"
import Smackdowns from "./pages/Smackdowns"
import PowerCards from "./pages/PowerCards"
import Prohibited from "./pages/Prohibited"

const App = () => {
	
	useEffect(() => {
		const existingCart = localStorage.getItem("cart")
		if (existingCart === null) {
			localStorage.setItem("cart", JSON.stringify([]))
		}
	}, [])

	return (
		<BrowserRouter>
			<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="shop" element={<Shop />} />
						<Route path="cart" element={<Cart />}>
							<Route path ="checkout" element={<Checkout />} />
						</Route>
						<Route path="contact" element={<Contact />} />
						<Route path="how-to" element={<HowTo />}>
							<Route index element={<Aim />} />
							<Route path="setup" element={<Setup />} />
							<Route path="gameplay" element={<Gameplay />} />
							<Route path="card-values" element={<CardValues />} />
							<Route path="calling-croc" element={<CallingCroc />} />
							<Route path="smackdowns" element={<Smackdowns />} />
							<Route path="power-cards" element={<PowerCards />} />
							<Route path="prohibited" element={<Prohibited />} />
						</Route>
					</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
