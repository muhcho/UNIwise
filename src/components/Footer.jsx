import React from "react";

import uniwiseLogo from "../assets/NEW LOGO.svg";
import linkedinIcon from "../assets/mdi_linkedin.svg";
import twitterIcon from "../assets/fa6-brands_square-x-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section - Logo and description */}
        <div className="footer-top">
          <img src={uniwiseLogo} alt="UNIwise Logo" className="footer-logo" />
          <p className="footer-description">
            We help universities deliver secure and accessible digital assessment with our end-to-end platform, WISEflow.
          </p>
        </div>

        {/* Link Sections - on new row */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>Product Overview</li>
              <li>WISEflow</li>
              <li>Originality</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>Company</li>
              <li>Testimonials</li>
              <li>Customer Stories</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Digital Assessment Hub</li>
              <li>Service Center</li>
              <li>Blogs</li>
              <li>Events</li>
              <li>Whitepapers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact us</h4>
            <ul>
              <li>Reach out</li>
              <li>Newsletter</li>
            </ul>
            <h4>Legal</h4>
            <ul>
              <li>Data Security</li>
              <li>Privacy and Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          ©2025 UNIwise, Inc.
          <img src={linkedinIcon} alt="LinkedIn" />
          <img src={twitterIcon} alt="X/Twitter" />
        </div>
        <div className="footer-contact">hello@uniwise.eu</div>
        <div className="footer-address">
          Bredskifte Alle 15, 1.tv, 8210 Aarhus V, Denmark | Bartle House, 9 Oxford Court, Manchester, M2 3WQ, United Kingdom
        </div>
      </div>
    </footer>
  );
};

export default Footer;
