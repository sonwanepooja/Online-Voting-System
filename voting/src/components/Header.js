import React from "react";
import "./Header.css";
import LETS_GO from "../Images/lets_vote.jpg";
import LOGIN_BUTTON from "../Images/loginButton.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className="header-container">
      {/* Background with particles/stars effect */}
      {/* <div className="background-overlay">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div> */}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <img
            src={LOGIN_BUTTON}
            alt="Login"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content-header">
        {/* Image instead of Neon Sign */}
        <div className="neon-sign-container">
          <div className="neon-sign">
            <img src={LETS_GO} alt="Let's Vote" className="vote-image" />
            {/* <div className="neon-border">
              <div className="neon-text">
                <span className="lets">LET'S</span>
                <span className="vote">VOTE</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Content */}
        <div className="content-section">
          <h1 className="main-heading">Be a part of decision</h1>
          <h2 className="sub-heading">Vote Today</h2>

          <div className="action-buttons">
            <button className="register-btn">REGISTER</button>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </div>
      </div>

      {/* Bottom Right Corner Text */}
      <div className="corner-text">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
};

export default Header;
