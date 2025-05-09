import React, { useState } from "react";
import linesBg from "../assets/linesbigleft.svg";
import questionIcon from "../assets/Questinmarkicon.svg";
import arrowIcon from "../assets/arrowicondown.svg";

const faqItems = [
  {
    question: "How does booking a demo work?",
    answer:
      "You simply submit your request through our website, and we’ll contact you within a week to schedule a session. The demo can be held either online or in person, depending on what works best for you.",
  },
  {
    question: "What is digital assessment?",
    answer:
      "Digital assessment refers to using online tools and platforms to create, deliver, and manage exams and evaluations. It replaces paper-based processes with secure, flexible, and scalable digital solutions — making assessment easier for institutions, educators, and students.",
  },
  {
    question: "Is WISEflow suitable for all types of exams?",
    answer:
      "Yes — WISEflow supports a wide range of assessment formats, including written exams, oral exams, multimedia submissions, and group projects. The platform is designed to handle both on-site and remote assessments.",
  },
  {
    question: "What is Originality and how does it work?",
    answer:
      "Originality is WISEflow’s integrated plagiarism detection tool. It checks student submissions for similarities across a wide range of sources, helping ensure academic integrity while keeping the process simple and fully embedded within the exam workflow.",
  },
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="faq-section">
      <img src={linesBg} alt="Decorative lines" className="faq-lines-bg" />

      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-title">We usually get <br /> asked about:</h2>
        </div>

        <div className="faq-right">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-header"
                onClick={() => toggleItem(index)}
              >
                <div className="faq-question-start">
                  <img src={questionIcon} alt="Question Icon" />
                  <span>{item.question}</span>
                </div>
                <img
                  src={arrowIcon}
                  alt="Toggle Answer"
                  className={`faq-arrow ${openItems[index] ? "open" : ""}`}
                />
              </div>
              {openItems[index] && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
