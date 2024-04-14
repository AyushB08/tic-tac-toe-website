import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";
import ReactLogo from "../assets/react-logo.png";
import HTMLLogo from "../assets/html-logo.png";
import CSSLogo from "../assets/css-logo.png";
import PythonLogo from "../assets/python-logo.png";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="content">
          <div className="column-one">
            <h2>Languages/Frameworks</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Used VS Code IDE</li>
              <li>Made this Website to practice my web development skills with React.</li>
              <li>AI Algorithm developed originally in Python. GitHub: </li>
            </ul>
          </div>
          <div className="column-two">
            <div className="logos">
              <div className="logo-row">
                <Link to="/"><img src={HTMLLogo} alt="HTML Logo" className="logo" /></Link>
                <Link to="/"><img src={CSSLogo} alt="CSS Logo" className="logo" /></Link>
              </div>
              <div className="logo-row">
                <Link to="/"><img src={ReactLogo} alt="React Logo" className="logo" /></Link>
                <Link to="/"><img src={PythonLogo} alt="Python Logo" className="logo" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
