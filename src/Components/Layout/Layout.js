import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/App.scss";
import Toggle from "../Toggle";
import { Link } from "react-router-dom";
import { keepTheme } from "../../utils/themes";
import Logo from "../Logo";
function Layout({ children }) {
    const [className, setClassName] = useState("theme-dark");
    useEffect(() => {
        keepTheme(setClassName)
    }, [setClassName])

  return (
    <>
        <Logo/>
        <div className="main-container">
          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </nav>
            <Toggle  setClassName={setClassName} className="w-100"/>
            {children}
        </div>
    </>
  );
}

export default Layout;