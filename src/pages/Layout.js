import { Outlet, Link } from "react-router-dom";
import PortfolioLogo from "../images/logo-portfolio.png";

const Layout = () => {
    return (
      <>
        <nav className="navbar">

        <h1 className="logoText">Kaitlin's Portfolio</h1>

          <ul className="navul">
            <li className="navli">
              <Link to="/contact" className="link">Contact</Link>
            </li>
            <li className="navli">
              <Link to="/about" className="link">About</Link>
            </li>
            <li className="navli">
              <Link to="/" className="link">Home</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;