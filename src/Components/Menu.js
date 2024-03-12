import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import "../assets/styles/menu.scss";
function Layout({ children }) {
   
  return (
    <header>
        <Logo/>
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink>
        </nav>
    </header>
    
  );
}

export default Layout;