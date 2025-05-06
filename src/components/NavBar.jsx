import { useState } from "react";
import ArrowIcon from "../assets/arrow icon.png";
import Logo from "../assets/NEW LOGO.png";
import "../index.css"; // ensure this is here if needed

const navItems = ["Solutions", "About", "Resources", "Contact us"];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (item) => {
    setActiveMenu((prev) => (prev === item ? null : item));
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <img src={Logo} alt="UNIwise logo" className="navbar__logo" />

        {/* Center nav links */}
        <div className="navbar__links">
          {navItems.map((item) => (
            <div
              className={`navbar__item ${activeMenu === item ? "active" : ""}`}
              key={item}
              onMouseEnter={() => toggleMenu(item)}
              onMouseLeave={() => toggleMenu(null)}
            >
              <div className="navbar__item-inner">
                <span>{item}</span>
                <img
                  src={ArrowIcon}
                  alt="Dropdown arrow"
                  className={`navbar__arrow ${
                    activeMenu === item ? "rotated" : ""
                  }`}
                />
              </div>

              {activeMenu === item && (
                <div className="navbar__dropdown">
                  <p className="navbar__dropdown-placeholder">
                    {item} dropdown content
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side button */}
        <button className="navbar__demo-btn">Book a demo</button>
      </div>
    </nav>
  );
}
