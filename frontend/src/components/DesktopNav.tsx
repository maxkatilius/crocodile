import { useState } from "react"
import { NavLink } from "react-router-dom"
import CartImg from "https://cdn.jsdelivr.net/gh/maxkatilius/crocodile/src/assets/images/cart.png"

const DesktopNav = () => {

    const [cartCount, setCartCount ] = useState<number>(3)

    return (
        <nav className="desktop__nav">
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
                <span className="cart-img-container">
                    <img src={CartImg} />
                    <span className="cart-count">{cartCount}</span>
                    <span className="underline"></span>
                </span>
            </NavLink>
        </nav>
    )
}

export default DesktopNav