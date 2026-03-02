import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa"; // small icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand and Contact */}
        <div className="footer-section">
          <h2 className="footer-brand">Vastrika</h2>
          <p>Contact: +91 98765 43210</p>
          <p>Email: info@vastrika.com</p>
        </div>

        {/* Registered Office */}
        <div className="footer-section">
          <h3>Registered Office</h3>
          <p>123 Fashion Street, Hyderabad, Telangana, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
              instagram.com/vastrika
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
              youtube.com/@vastrika
        
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 Vastrika. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;