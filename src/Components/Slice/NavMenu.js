import { NavLink } from "react-router-dom";
function NavMenu() {
  
    
    return (
        <nav>
            <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
      
    )
}

export default NavMenu;