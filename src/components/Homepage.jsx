import React from "react";
import Navbar from "./Navbar";

// Assets
import institutionIcon from "../assets/institutionicon.png";
import heroImage from "../assets/hero.png";
import aarhusLogo from "../assets/aarhusUni.svg";
import liuLogo from "../assets/LiU_logo.png";
import erfurtLogo from "../assets/Logo_Universitaet_Erfurt_als_PNG.png";
import promoVideo from "../assets/Uniwise Video FIN.mp4";
import linesSvg from "../assets/Lines Big.svg";
import trustIcon from "../assets/trusticon.svg";
import integrationIcon from "../assets/integrationicon.svg";

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero + Video with background lines */}
      <div className="section-lines-wrapper">
        <div className="section-lines">
          <img src={linesSvg} alt="Decorative lines" />
        </div>

        {/* Hero Section */}
        <section className="hero-wrapper">
          <div className="hero">
            <div className="hero__content">
              <div className="hero__label">
                <img src={institutionIcon} alt="institution icon" />
                <span>For institutions</span>
              </div>

              <h1 className="hero__title">
                SHAPING THE FUTURE OF <br /> DIGITAL ASSESSMENT
              </h1>

              <p className="hero__desc">
                Run exams smoothly from start to finish — securely, efficiently,
                and all in one place. Designed to make assessment easier for
                institutions, educators, and students alike.
              </p>

              <button className="hero__button">Book a demo</button>
            </div>

            <div className="hero__image">
              <img src={heroImage} alt="Student studying" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <video
            src={promoVideo}
            autoPlay
            muted
            loop
            playsInline
            className="video-player"
          />
        </section>
      </div>

      {/* Trusted Institutions */}
      <section className="trusted-section">
        <div className="trusted-text">
          TRUSTED BY LEADING
          <br />
          INSTITUTIONS
        </div>
        <div className="trusted-logos">
          <img src={aarhusLogo} alt="Aarhus University" />
          <img src={liuLogo} alt="Linköping University" />
          <img src={erfurtLogo} alt="Universität Erfurt" />
        </div>
      </section>

      {/* Why Choose UNIwise Section */}
      <section className="whychoose-section">
        <div className="whychoose-grid">
          {/* Left Title & Card */}
          <div className="whychoose-left">
            <h2 className="whychoose-title">
              WHY CHOOSE <br />
              UNIwise?
            </h2>
            <div className="feature-card-large">
              <h3>End-to-End Assessment</h3>
              <p>
                Manage the entire exam journey – from authoring and scheduling
                to grading and feedback – in one platform. WISEflow simplifies
                complex workflows and reduces manual tasks across departments.
                Built to support both large-scale and flexible assessment needs.
              </p>
              <button>See more</button>
            </div>
          </div>

          {/* Right Column */}
          <div className="whychoose-right">
            <div className="feature-card-small-group">
              <div className="feature-card-small">
                <img
                  src={trustIcon}
                  alt="Trust Icon"
                  className="feature-icon"
                />
                <h4>Trust</h4>
                <p>
                  Chosen by leading institutions across Europe for reliable,
                  modern assessment delivery.
                </p>
              </div>
              <div className="feature-card-small">
                <img
                  src={integrationIcon}
                  alt="Integration Icon"
                  className="feature-icon"
                />
                <h4>Integration</h4>
                <p>
                  Easily connects with your LMS and student systems for smooth
                  exam setup and management.
                </p>
              </div>
            </div>

            <div className="feature-card-large">
              <h3>Secure and Compliant</h3>
              <p>
                WISEflow is designed to meet the highest standards for data
                protection, GDPR compliance, and academic integrity.
                Accessibility is built-in to ensure fairness for all users.
                Institutions can rely on robust security at every step of the
                exam process.
              </p>
              <button>See more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
