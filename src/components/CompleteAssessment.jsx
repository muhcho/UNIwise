import React, { useState } from "react";
import bulletIcon from "../assets/bulletpointicon.svg";
import institutionsImage from "../assets/forinsttutionsstock.svg";
import teachersImage from "../assets/forteachersstock.svg";
import studentsImage from "../assets/forstudentsstock.svg";
import linesSvg from "../assets/Lines Big.svg";

const tabData = {
  institutions: {
    title: "Drive Efficiency, Compliance, and Academic Excellence",
    bullets: [
      "Standardize assessment processes across all departments for better quality assurance and institutional consistency",
      "Support digital transformation goals with a scalable solution that adapts to the institution’s size and complexity",
      "Strengthen academic integrity and compliance with built-in security, GDPR alignment, and plagiarism detection",
      "Enhance the university’s reputation by offering modern, accessible, and future-proof assessment experiences for students and staff",
    ],
    image: institutionsImage,
  },
  teachers: {
    title: "Simplify Exam Creation and Feedback",
    bullets: [
      "Easily create, schedule, and manage exams across different formats (oral, written, multimedia)",
      "Provide structured, consistent feedback using built-in rubrics and annotation tools.",
      "Access all exam materials and student submissions digitally, anytime, anywhere",
      "Save time on grading and streamline communication with students through the platform",
    ],
    image: teachersImage,
  },
  students: {
    title: "Focus on Learning, Not the Process",
    bullets: [
      "Benefit from a fair, transparent assessment process with clear instructions and deadlines",
      "Submit a variety of formats — from written responses to multimedia projects — with ease",
      "Access exams and feedback digitally from any device (BYOD-friendly)",
      "Stay informed with real-time notifications and exam updates",
    ],
    image: studentsImage,
  },
};

const CompleteAssessment = () => {
  const [activeTab, setActiveTab] = useState("institutions");
  const { title, bullets, image } = tabData[activeTab];

  return (
    <section className="complete-assessment-section">
      <div className="complete-assessment-container">
        {/* Left: Content */}
        <div className="complete-assessment-left">
          <div className="assessment-header">
            <span className="subtitle">COMPLETE ASSESSMENT</span>
            <h2 className="assessment-title">{title}</h2>
          </div>

          <ul className="assessment-list">
            {bullets.map((item, idx) => (
              <li key={idx}>
                <img src={bulletIcon} alt="" />
                {item}
              </li>
            ))}
          </ul>

          <div className="assessment-tabs">
            {Object.keys(tabData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`assessment-tab ${
                  activeTab === key ? "active" : ""
                }`}
              >
                {key === "institutions" && "For institutions"}
                {key === "teachers" && "For teachers"}
                {key === "students" && "For students"}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Image with lines */}
        <div className="complete-assessment-right">
          <img src={linesSvg} alt="Decorative lines" className="bg-lines" />
          <img src={image} alt="Illustration" className="assessment-illustration" />
        </div>
      </div>
    </section>
  );
};

export default CompleteAssessment;
