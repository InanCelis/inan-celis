
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Toggle from "./Components/Toggle";

import { keepTheme } from './utils/themes';
import { useHelperFunction } from './utils/helperFuntion';

function App() {
  const [className, setClassName] = useState("theme-dark");

  useHelperFunction();
  useEffect(() => {
    keepTheme(setClassName)
    
  }, [setClassName])

  return (
    <div className={`App ${className}`}>
      <div className="main-container">
        <h1>Abbey Perini's Portfolio</h1>
        <Home home={true} />
        <Toggle  setClassName={setClassName} />
        <div>
          <Link to='/'>Layout</Link>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
      </div>
      </div>
    </div>
  );
}

export default App;
