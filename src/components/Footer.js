import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper-footer">
      <div className="footer-section-one">
        {/* <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div> */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      {/* <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Request a Demo</span>
        </div>
        <div className="footer-section-columns">
          <span>Investing in Africa</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
