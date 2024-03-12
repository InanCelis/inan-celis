import React, { useEffect, useState } from 'react';
import "../assets/styles/toggle.scss";
import { setTheme } from '../utils/themes';

function Toggle() {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(false)
    // the opposite, for screenreaders
    const theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
        setActive(true)
      } else {
        setTheme('theme-dark')
        setActive(false)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
      if (e.code === "Enter") {
        changeThemeAndToggle()
      }
    }

    useEffect(() => {
      if (theme === 'theme-dark') {
        setActive(false)
      } else if (theme === 'theme-light') {
        setActive(true)
      }
    }, [theme])

    return (
      <div className="container--toggle">
        <input role="switch" onKeyDown={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
          <p className="offscreen"></p>
        </label>
      </div>
    )
}

export default Toggle;