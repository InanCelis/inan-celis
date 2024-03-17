import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
function Layout({ children }) {
 
  return (
    <>
      <div className="main-container">
          <Menu />
          {children}
          <Footer />
      </div>
    </>
  );
}

export default Layout;