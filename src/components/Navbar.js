import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../assets/logo.png";
import './NavbarStyles.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" smooth={true}><img src={Logo} alt="" /></Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to="home" spy={true} smooth={true}  duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ai" spy={true} smooth={true} duration={500}>
              AI
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="player" spy={true} smooth={true} duration={500}>
              2-Player
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
