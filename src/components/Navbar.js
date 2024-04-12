import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../assets/logo.png"
import './NavbarStyles.css'
const Navbar = () => {

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <header>
        <nav className = "navbar">
            <div className = "logo">
                <Link to="/"><img src={Logo} alt=""/></Link>
            </div>
            <ul className = "nav-menu">
                <li className = "nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className = "nav-item">
                <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/ai" className="nav-link">AI</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/2-player" className="nav-link">2-Player</Link>
                </li>
                <li className = "nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    
    </header>
  )
}

export default Navbar