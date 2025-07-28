import { Outlet } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"


const HowTo = () => {
	return (
		<main className="how-to-container">
			<ScrollToTop />
			<Outlet />
		</main>
	);
};

export default HowTo;
