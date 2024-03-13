import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../assets/styles/menu.scss";
function Layout({ children }) {
   
  return (
    <header>
      <div>
        <NavLink to="/" className="logo-link"><Logo/></NavLink>
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
      </div>
      <div className="socialIcon">
        <a href="https://www.messenger.com/t/100008461001743/" target="__blank">
          <i class="fa-brands fa-facebook-messenger"></i>
        </a>
        <a href="https://github.com/InanCelis" target="__blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ferdinand-celis-099394172/" target="__blank">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      
    </header>
    
  );
}

export default Layout;