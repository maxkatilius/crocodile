import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {

	return (
		<div className="site-container">
			<Header />
			<ScrollToTop />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
