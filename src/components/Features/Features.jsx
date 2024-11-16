import React, { useEffect } from 'react';
import './Features.css';

function Features() {
  useEffect(() => {
    const featureItems = document.querySelectorAll('.feature-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add animation class
          } else {
            entry.target.classList.remove('visible'); // Remove animation class when leaving
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    featureItems.forEach((item) => observer.observe(item));

    return () => {
      featureItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="features" className="container">
      <h2>Why Choose Us?</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Hands-On Projects</h3>
          <p>
            Each day, tackle a real-world project that enhances your skills and
            builds your portfolio.
          </p>
        </div>
        <div className="feature-item">
          <h3>Expert Guidance</h3>
          <p>
            Learn from experienced developers who will guide you through the
            learning process step-by-step.
          </p>
        </div>
        <div className="feature-item">
          <h3>Community Support</h3>
          <p>
            Join a community of like-minded learners and receive feedback,
            support, and encouragement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
