import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
function Layout({ children }) {
 
  return (
    <>
      <div className="main-container">
          <Menu />
          {/* <Toggle  setClassName={setClassName} className="w-100"/> */}
          {/* <div className="burger-menu"></div> */}
          {children}
          <Footer />
      </div>
    </>
  );
}

export default Layout;