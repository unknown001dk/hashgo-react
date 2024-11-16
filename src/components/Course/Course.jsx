import React, { useEffect } from "react";
import "./Course.css";
import useModal from "../hooks/useModal";
import RegisterModal from "../Modal/Register/RegisterModal";
import CourseDetailsModal from "../Modal/CourseDetails/CourseDetailsModal";

function Course() {
  const {
    isModalOpen: isRegisterModalOpen,
    openModal: openRegisterModal,
    closeModal: closeRegisterModal,
  } = useModal();

  const {
    isModalOpen: isDetailsModalOpen,
    openModal: openDetailsModal,
    closeModal: closeDetailsModal,
  } = useModal();

  useEffect(() => {
    const featureItems = document.querySelectorAll('.course-card');

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
    <section id="courses" className="container">
      <h2>Available Courses</h2>
      <div className="course-list">
        <div className="course-card">
          <h3>10 Projects in 15 Days</h3>
          <p>Learn the MERN Stack by building 10 hands-on projects!</p>
          <button onClick={openRegisterModal}>Register</button>
          <button onClick={openDetailsModal}>Learn More</button>
        </div>
      </div>

      {isRegisterModalOpen && (
        <div className="modal-container">
          <RegisterModal closeModal={closeRegisterModal} />
        </div>
      )}

      {isDetailsModalOpen && (
        <div className="modal-container">
          <CourseDetailsModal closeModal={closeDetailsModal} />
        </div>
      )}
    </section>
  );
}

export default Course;
