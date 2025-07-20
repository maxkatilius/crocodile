import { NavLink } from "react-router-dom"

const DesktopNav = () => {

    return (
        <nav className="desktop__nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home<span className="underline"></span></NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About<span className="underline"></span></NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop<span className="underline"></span></NavLink>
            <NavLink to="/how-to" className={({ isActive }) => isActive ? "active" : ""}>How to play<span className="underline"></span></NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact us<span className="underline"></span></NavLink>
        </nav>
    )
}

export default DesktopNav