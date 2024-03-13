import React, {useState, useEffect} from "react";
import Toggle from "../Toggle";
import { keepTheme } from "../../utils/themes";
import Menu from "../Menu"
function Layout({ children }) {
    const [setClassName] = useState("theme-dark");
    useEffect(() => {
        keepTheme(setClassName)
    }, [setClassName])

  return (
    <>
      <div className="main-container">
          <Menu />
          <Toggle  setClassName={setClassName} className="w-100"/>
          {children}
      </div>
    </>
  );
}

export default Layout;