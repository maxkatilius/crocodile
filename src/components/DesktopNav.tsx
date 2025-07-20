import { NavLink } from "react-router-dom"

const DesktopNav = () => {

    return (
        <nav className="desktop__nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home<span className="underline"></span></NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About<span className="underline"></span></NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop<span className="underline"></span></NavLink>
            <NavLink to="/how-to" className={({ isActive }) => isActive ? "active" : ""}>How to Play<span className="underline"></span></NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us<span className="underline"></span></NavLink>
        </nav>
    )
}

export default DesktopNav