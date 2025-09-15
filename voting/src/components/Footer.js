import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaPaperPlane } from "react-icons/fa";
import "./Footer.css"; // import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact:</h3>
          <p>1800 9090 32</p>
          <p>1800 9000 64</p>

          <h3 className="footer-heading">Helpline Number:</h3>
          <p>9090 1234 46</p>
          <p>9090 1234 47</p>

          <h3 className="footer-heading">Email:</h3>
          <p>complaint@electionindia.gov.in</p>
          <p>info@electionindia.gov.in</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Get In</h3>
          <p className="footer-link">Register</p>
          <p className="footer-link">Login</p>

          <h3 className="footer-heading">Know More</h3>
          <p className="footer-link">Features</p>
          <p className="footer-link">About</p>
          <p className="footer-link">Steps</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <p className="footer-link">Facebook</p>
          <p className="footer-link">Instagram</p>
          <p className="footer-link">Twitter</p>

          <div className="footer-icons">
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
              <FaFacebookF />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Feedback:</h3>
          <input type="text" placeholder="Your Name" className="footer-input" />
          <textarea placeholder="Your Message" rows="3" className="footer-textarea"></textarea>
          <button className="footer-button">
            <FaPaperPlane className="footer-icon" /> Send
          </button>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="footer-bottom">© shank.design</div>
    </footer>
  );
};

export default Footer;
