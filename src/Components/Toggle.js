import React from 'react';
import "../assets/styles/toggle.scss";
import { setTheme } from '../utils/themes';

function Toggle() {
  
    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
      } else {
        setTheme('theme-dark')
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    return (
      <>
      <div className="trigger desktop" onClick={handleOnClick}></div>
      </>
      
    )
}

export default Toggle;