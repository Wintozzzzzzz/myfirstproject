import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.jpg";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <p>DRESSUP.GE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>2024 All Right Reserved &copy; </p>
      </div>
    </div>
  );
};

export default Footer;
