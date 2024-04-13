import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from "../assets/logo.png";
import './NavbarStyles.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const closeLoginPopup = () => {
    setShowLogin(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeSignupPopup = () => {
    setShowSignup(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" smooth={true}><img src={Logo} alt="" /></Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to="home" spy={true} smooth={true} duration={500}>
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
            <Link className="nav-link" onClick={handleLoginClick}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={handleSignupClick}>Signup</Link>
          </li>
        </ul>
      </nav>
      {showLogin && (
        <div className="login-popup">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Login</button>
            </form>
            <button onClick={closeLoginPopup}>Close</button>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="login-popup">
          <div className="login-container">
            <h2>Signup</h2>
            <form>
              <div className="form-group">
                <label htmlFor="new-username">Username:</label>
                <input type="text" id="new-username" name="new-username" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" />
              </div>
              <button type="submit">Signup</button>
            </form>
            <button onClick={closeSignupPopup}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
