import React, { useState } from "react";
import arrowIcon from "../assets/Iconsarrow.svg";

// Logos
import logo1 from "../assets/Partners Logo Small.svg";
import logo2 from "../assets/Partners Logo Small2.svg";
import logo3 from "../assets/Partners Logo Small3.svg";
import logo4 from "../assets/Partners Logo Small3.svg";

// Videos
import video1 from "../assets/6037149_Businesswoman_Business_3840x2160.mp4";
import video2 from "../assets/0502 (1).mp4";
import video3 from "../assets/0502 (1)(1).mp4";
import video4 from "../assets/0502 (1)(2).mp4";

// People
import person1 from "../assets/People=Person 1.png";
import person2 from "../assets/People=Person 5.png";
import person3 from "../assets/People=Person 7.png";
import person4 from "../assets/People=Person 4.png";

const testimonials = [
  {
    logo: logo1,
    video: video1,
    quote:
      "We work with a wide range of higher education institutions, and WISEflow’s reliability and flexibility have proven essential for supporting secure, accessible digital exams across the sector.",
    person: {
      name: "Dorte Simonsen",
      role: "Head of Digital Learning & Assessment",
      image: person1,
    },
  },
  {
    logo: logo2,
    video: video2,
    quote:
      "WISEflow allows us to confidently manage exams at scale while maintaining academic integrity and compliance. Its easy integration with our systems makes the process seamless for our team.",
    person: {
      name: "Lars Nyström",
      role: "Director of Educational Technology",
      image: person2,
    },
  },
  {
    logo: logo3,
    video: video3,
    quote:
      "By fully rolling out WISEflow across all faculties, we’ve been able to ensure consistency, security, and efficiency in our digital assessments. The platform has made exam delivery smoother and more transparent.",
    person: {
      name: "Sophie Keller",
      role: "Digital Transformation Lead",
      image: person3,
    },
  },
  {
    logo: logo4,
    video: video4,
    quote:
      "WISEflow has helped us streamline the exam process across departments, making assessment management easier for both our staff and students. The flexibility of the platform is a huge plus.",
    person: {
      name: "Niko Fischer",
      role: "Head of Digital Strategy & Innovation",
      image: person4,
    },
  },
];

const VideoTestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const { logo, video, quote, person } = testimonials[current];

  return (
    <section className="video-testimonial-section">
      <video
        src={video}
        className="testimonial-video"
        muted
        controls
        playsInline
      />
      <div className="testimonial-ui-card">
        <div className="testimonial-card-header">
          <img src={logo} alt="Partner logo" className="testimonial-logo" />
          <div className="testimonial-arrows">
            <img
              src={arrowIcon}
              alt="Previous"
              className="arrow left"
              onClick={handlePrev}
            />
            <img
              src={arrowIcon}
              alt="Next"
              className="arrow right"
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="testimonial-bottom">
          <p className="testimonial-quote">“{quote}”</p>
          <div className="testimonial-person">
            <img
              src={person.image}
              alt={person.name}
              className="testimonial-avatar"
            />
            <div className="testimonial-person-info">
              <strong>{person.name}</strong>,
              <br />
              <span>{person.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
