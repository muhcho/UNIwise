import React, { useState } from "react";
import logo from "../assets/NEW LOGO.png";
import arrowIcon from "../assets/arrow icon.png";

import overviewIcon from "../assets/Overview.svg";
import wiseflowIcon from "../assets/wiseflow.svg";
import originalityIcon from "../assets/originality.svg";

import companyIcon from "../assets/company.svg";
import customerStoriesIcon from "../assets/customerstories.svg";
import testimonialsIcon from "../assets/testimonials.svg";
import careersIcon from "../assets/careers.svg";

import dahIcon from "../assets/Digital Assesment Hub.svg";
import serviceCenterIcon from "../assets/Service center.svg";
import eventsIcon from "../assets/Events.svg";
import blogsIcon from "../assets/Blogs.svg";
import whitepapersIcon from "../assets/Whitepapers.svg";

import reachOutIcon from "../assets/reach out.svg";
import newsletterIcon from "../assets/Newsletter1.svg";

import UICard from "./UICard";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = ["Solutions", "About", "Resources", "Contact us"];

  const dropdownContent = {
    Solutions: [
        {
          title: "Products Overview",
          description: "Explore the full suite of UNIwise solutions for seamless digital assessment.",
          icon: overviewIcon,
        },
        {
          title: "WISEflow",
          description: "Deliver, manage and grade assessments efficiently with our flagship platform.",
          icon: wiseflowIcon,
        },
        {
          title: "WISEflow's Originality",
          description: "Promote academic integrity with built-in originality detection tools.",
          icon: originalityIcon,
        },
      ],
      About: [
        {
          title: "Company",
          description: "Learn more about UNIwise’s mission, values and leadership team.",
          icon: companyIcon,
        },
        {
          title: "Customer Stories",
          description: "Discover how institutions across Europe are transforming exams.",
          icon: customerStoriesIcon,
        },
        {
          title: "Testimonials",
          description: "Hear directly from educators and students using WISEflow daily.",
          icon: testimonialsIcon,
        },
        {
          title: "Career",
          description: "Join our growing team and help shape the future of digital education.",
          icon: careersIcon,
        },
      ],
      Resources: [
        {
          title: "Digital Assessment Hub",
          description: "Access expert articles, guides and tools on digital exam best practices.",
          icon: dahIcon,
        },
        {
          title: "Service Center",
          description: "Find documentation, FAQs, and support for using UNIwise solutions.",
          icon: serviceCenterIcon,
        },
        {
          title: "Events",
          description: "Join us at upcoming webinars, workshops and conferences across Europe.",
          icon: eventsIcon,
        },
        {
          title: "Blogs",
          description: "Get the latest insights on assessment trends and product updates.",
          icon: blogsIcon,
        },
        {
          title: "Whitepapers",
          description: "Explore in-depth research and thought leadership in digital assessment.",
          icon: whitepapersIcon,
        },
      ],
   "Contact us": [
  {
    title: "Reach out",
    description: "Contact our team with questions or to explore partnership opportunities.",
    icon: reachOutIcon,
  },
  {
    title: "Newsletter",
    description: "Subscribe for product news, updates, and stories from the UNIwise team.",
    icon: newsletterIcon,
  },
],
  };

  const handleClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="UNIwise Logo" className="navbar__logo" />

        <ul className="navbar__links">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`navbar__item ${
                activeMenu === item || hoveredItem === item ? "active" : ""
              }`}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleClick(item)}
            >
              <div className="navbar__item-inner">
                {item}
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className={`navbar__arrow ${
                    activeMenu === item ? "rotated" : ""
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>

        <button className="navbar__demo-btn">Book a demo</button>
      </div>

      {activeMenu && (
        <div
          className="navbar__mega-dropdown"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="navbar__dropdown-inner">
            <div className="navbar__dropdown-left">
              <h4 className="dropdown__title">{activeMenu}</h4>
              <hr className="dropdown__divider" />
              <ul className="dropdown__list">
                {dropdownContent[activeMenu].map((entry) => (
                  <li className="dropdown__item" key={entry.title}>
                    <div className="dropdown__icon">
  <img
    src={entry.icon}
    alt={entry.title}
    className={
      entry.title === "Products Overview" || entry.title === "Reach out"
        ? "dropdown__icon-img adjusted-icon"
        : "dropdown__icon-img"
    }
  />
</div>
                    <div className="dropdown__text">
                      <div className="dropdown__item-title">{entry.title}</div>
                      <div className="dropdown__item-desc">{entry.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="navbar__dropdown-right">
  <h4 className="dropdown__title">Latest Updates</h4>
  <hr className="dropdown__divider" />
  <div className="ui-card__wrapper">
    <UICard />
    <UICard />
  </div>
</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
