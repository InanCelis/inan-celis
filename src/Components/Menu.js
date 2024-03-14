
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import React, {useState, useEffect} from "react";
import Toggle from "./Toggle";
import { keepTheme } from "../utils/themes";
import "../assets/styles/menu.scss";
function Layout({ children }) {

  const [setClassName] = useState("theme-dark");
  useEffect(() => {
      keepTheme(setClassName)
  }, [setClassName])

  const [isOpen, setOpen] = useState(false);
  const ToggleMenu = () => {
    setOpen(!isOpen); 
   };
  return (
    <>
      <div className="header">
        <header>
          <div>
            <NavLink to="/" className="logo-link"><Logo/></NavLink>
            <nav>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
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
        <Toggle  setClassName={setClassName} className="w-100 desktop-theme"/>
      </div>


        
      
      <div className="mobile-header">
        <NavLink to="/" className="logo-link"><Logo/></NavLink>
        <svg id="hamburger" className={isOpen ? 'open-menu' : ''} viewbox="0 0 60 40" onClick={ToggleMenu}>
          <g stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path id="top-line" d="M10,10 L50,10 Z"></path>
            <path id="middle-line" d="M10,20 L50,20 Z"></path>
            <path id="bottom-line" d="M10,30 L50,30 Z"></path>
          </g>
        </svg>

        <div className={`parent-mobile ${isOpen ? 'is-open' : ''}`} >
          <div className="mobile-content-menu">
            <div></div>
            <nav>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
                <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </nav>
            <div className="bottom-icon">
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
              <Toggle  setClassName={setClassName} className="w-100 mobile-theme"/>
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  );
}

export default Layout;