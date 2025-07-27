import { useContext } from "react"
import CartContext from "../context/CartContext"
import { NavLink } from "react-router-dom"
import CartImg from "../assets/images/cart-white.png"

const DesktopNav = () => {

    const context = useContext(CartContext)
	if (!context) throw new Error("CartContext must be used within a CartProvider")
	const { cartCount } = context

    return (
        <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
                <span className="underline"></span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
                <span className="underline"></span>
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>
                Shop
                <span className="underline"></span>
            </NavLink>
            <NavLink to="/how-to" className={({ isActive }) => isActive ? "active" : ""}>
                How to Play
                <span className="underline"></span>
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
                <span className="desktop-nav-cart-img-container">
                    <img src={CartImg} />
                    <span className="cart-count">{cartCount > 0 ? cartCount : ""}</span>
                    <span className="underline"></span>
                </span>
            </NavLink>
        </nav>
    )
}

export default DesktopNav