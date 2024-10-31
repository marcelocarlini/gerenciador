import { Link } from "react-router-dom";
import logo from "../assets/logo-white.svg";
import "../styles/components/_navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projetos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
