import React, {useState, useEffect} from "react";
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
    <div className={`App ${className}`}>
        <Logo/>
        <div className="main-container">
            <Link to='/home'>Home </Link>
            <Link to='/about'>About</Link>
            <Toggle  setClassName={setClassName} />
            {children}
        </div>
        
      {/* display the child prop */}
      
    </div>
  );
}

export default Layout;