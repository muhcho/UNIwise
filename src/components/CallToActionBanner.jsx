import React from "react";

// Assets
import uniwiseSmallLogo from "../assets/Uniwisesmalllogo.svg";
import bottomLeftShape from "../assets/wiseflowlogo.svg";
import topRightShape from "../assets/originality logo.svg";

const CallToActionBanner = () => {
  return (
    <section className="cta-banner">
      <img src={bottomLeftShape} alt="" className="cta-shape bottom-left" />
      <img src={topRightShape} alt="" className="cta-shape top-right" />

      <div className="cta-content">
        <img src={uniwiseSmallLogo} alt="Uniwise Logo" className="cta-logo" />
        <h2 className="cta-title">See it in action</h2>
        <p className="cta-description">
          Schedule a personalized demo to explore how our solution can support your goals.
        </p>
        <button className="cta-button">Book a demo</button>
      </div>
    </section>
  );
};

export default CallToActionBanner;
