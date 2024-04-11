import React from 'react'
import {Link} from 'react-router-dom'
import "./About.css"
import ReactLogo from "../assets/react-logo.png"
import HTMLLogo from "../assets/html-logo.png"
import CSSLogo from "../assets/css-logo.png"
import PythonLogo from "../assets/python-logo.png"

function About() {
  return (
    <div className = "about">
        
        
        <div className="container">
          <div className = "title">
            <h1>About</h1>
          </div>
          <div className = "columns">
            <div className = "column-one">
              <h1>Languages/Frameworks</h1>
              <div className = "list">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Used VS Code IDE</li>
                  <li>Made this Website to practice my web development skills with react. </li>
                  <li>AI Algorithm developed originally in python. GitHub: </li>
                </ul>
              </div>
            </div>
            <div className = "column-two">
              <div className = "logos">
                  <div className = "row-one">
                    <Link to="/"><img src={HTMLLogo} alt="" id="html"/></Link>
                    <Link to="/"><img src={CSSLogo} alt="" id="css"/></Link>
                  </div>
                  <div className="row-two">
                    <Link to="/"><img src={ReactLogo} alt="" id="react"/></Link>
                    <Link to="/"><img src={PythonLogo} alt="" id="python"/></Link>
                  </div>
                  
              </div>
            </div>
          </div>
          
            
        </div>
    </div>
    
  )
}

export default About