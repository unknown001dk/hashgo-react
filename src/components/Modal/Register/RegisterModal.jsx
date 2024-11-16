// RegisterModal.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterModal.css";

function RegisterModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    course: "10 Projects in 15 Days",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // fetch the registration
    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        if (data.success === true) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
        closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error registering. Please try again later.");
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <h2>Register for Course</h2>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />

          <label htmlFor="course">Select Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          >
            <option value="10 Projects in 15 Days">
              10 Projects in 15 Days
            </option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
