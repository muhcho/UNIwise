import React from "react";
import Navbar from "./Navbar";
import CompleteAssessment from "./CompleteAssessment";
import VideoTestimonialSection from "./VideoTestimonialSection";
import CallToActionBanner from "./CallToActionBanner";
import FAQAccordion from "./FAQAccordion";




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
import Illustration1 from "../assets/Stock Illustrations1.svg";
import Illustration2 from "../assets/Stock Illustrations2.svg";
import Illustration3 from "../assets/Stock Illustrations3.svg";
import Illustration4 from "../assets/Stock Illustrations4.svg";
import Illustration5 from "../assets/Stock Illustrations5.svg";
import Illustration6 from "../assets/Stock Illustrations6.svg";

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
          <div className="whychoose-left">
            <h2 className="whychoose-title">
              WHY CHOOSE <br />
              UNIWISE?
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

          <div className="whychoose-right">
            <div className="feature-card-small-group">
              <div className="feature-card-small">
                <img src={trustIcon} alt="Trust Icon" className="feature-icon" />
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

      {/* === Complete Assessment Tabs Section === */}
      <CompleteAssessment />

      {/* === WISEflow & Originality Sections === */}
      <section className="info-section">
        {/* WISEflow */}
        <div className="info-block">
          <h2 className="info-title">WISEflow</h2>
          <p className="info-desc">
            Everything – assessments, feedback, grades – is in one place. Everyone – students,
            administrators, academics – knows where to go.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Easy System Integration</h3>
              <p>Connects easily to your existing tools like LMS and student systems.</p>
              <div className="illustration-box light-blue">
                <img src={Illustration1} alt="" />
              </div>
            </div>
            <div className="info-card">
              <h3>Full Exam Management</h3>
              <p>Create, run, and grade exams digitally — no paper, no hassle, no complications.</p>
              <div className="illustration-box light-blue">
                <img src={Illustration2} alt="" />
              </div>
            </div>
            <div className="info-card">
              <h3>Secure & Scalable</h3>
              <p>Handles thousands of students securely and meets all legal requirements.</p>
              <div className="illustration-box light-blue">
                <img src={Illustration3} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Originality */}
        <div className="info-block">
          <h2 className="info-title">Originality</h2>
          <p className="info-desc">
            Ensure academic integrity with built-in plagiarism detection and similarity checks –
            fully integrated into the assessment process for a smooth, secure experience.
          </p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Plagiarism Checking</h3>
              <p>Detect similarities and potential plagiarism across documents with reliable, integrated tools.</p>
              <div className="illustration-box light-purple">
                <img src={Illustration4} alt="" />
              </div>
            </div>
            <div className="info-card">
              <h3>Support Academic Integrity</h3>
              <p>Promote fairness and originality in every submission with built-in integrity checks.</p>
              <div className="illustration-box light-purple">
                <img src={Illustration5} alt="" />
              </div>
            </div>
            <div className="info-card">
              <h3>Simple Process</h3>
              <p>Easily check work within the same platform — no need for separate systems or logins.</p>
              <div className="illustration-box light-purple">
                <img src={Illustration6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonialSection />

      <CallToActionBanner />

      <FAQAccordion />


    </>
  );
};

export default HomePage;
