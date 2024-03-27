import Menu from "../Menu";
import Footer from "../Footer";
function Layout({ children }) {
 
  return (
    <>
      <div className="main-container">
          <Menu />
            {children}
      </div>
      
      <Footer />
    </>
  );
}

export default Layout;