import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".testimonial-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll(".testimonial-item");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="testimonials" className="container" ref={sectionRef}>
      <h2>What Our Students Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item animated-card">
          <p>
            "I learned so much in just 15 days! The projects were engaging, and
            I felt supported every step of the way."
          </p>
          <p><strong>- Sankar, Student</strong></p>
        </div>
        <div className="testimonial-item animated-card">
          <p>
            "The hands-on projects were exactly what I needed to build my
            skills. I now feel confident applying for jobs!"
          </p>
          <p><strong>- DK, Junior Developer</strong></p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
