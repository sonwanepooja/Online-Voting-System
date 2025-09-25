import React, { useState } from "react";
import "../components/Registration.css";
import REGISTRATION_IMAGE from "../Images/Figure.svg";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    parentName: "",
    email: "",
    mobile: "",
    role: "",
    password: "",
    confirmPassword: "",
    aadharCardNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    const {
      name,
      dateOfBirth,
      parentName,
      email,
      mobile,
      password,
      confirmPassword,
      aadharCardNumber,
      role,
    } = formData;
    if (
      !name ||
      !dateOfBirth ||
      !parentName ||
      !email ||
      !mobile ||
      !password ||
      !confirmPassword ||
      !aadharCardNumber ||
      !role
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Validate mobile
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    // Validate Aadhar
    if (!/^\d{12}$/.test(aadharCardNumber)) {
      setError("Please enter a valid 12-digit Aadhar number");
      return;
    }

    // Validate password
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // If server sends error message
        setError(data.message || "Registration failed! Please try again.");
        return;
      }

      setError("");
      setSuccess(true);
      // Optionally reset formData here
    } catch (error) {
      console.error("Error registering:", error);
      setError("Registration failed! Please try again.");
    }
  };

  return (
    <div className="form-container">
      {/* Left side image */}
      <div className="form-image">
        <img src={REGISTRATION_IMAGE} alt="illustration" />
      </div>

      {/* Right side */}
      <div className="form-box">
        <span style={{ fontSize: "45px", fontFamily: "serif" }}>
          Registration
        </span>

        {error && <p className="error-text">{error}</p>}

        {/* ✅ Show success message OR form */}
        {success ? (
          <div className="success-message">
            <h2>Registration Successfully Completed 🎉</h2>
            <p>You can now login with your credentials.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="label-registration">Name</label>
            <input
              className="input-registration"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label className="label-registration">Date Of Birth</label>
            <input
              className="input-registration"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />

            <label className="label-registration">
              Father's / Mother's Name
            </label>
            <input
              className="input-registration"
              type="text"
              name="parentName"
              placeholder="Enter parent's name"
              value={formData.parentName}
              onChange={handleChange}
            />

            <label className="label-registration">Email</label>
            <input
              className="input-registration"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <label className="label-registration">Mobile No.</label>
            <input
              className="input-registration"
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />

            <label className="label-registration">Role</label>
            <select
              className="input-registration"
              style={{ width: "52%" }}
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="voter">Voter</option>
              <option value="candidate">Candidate</option>
              <option value="admin">Admin</option>
            </select>

            <label className="label-registration">Password</label>
            <input
              className="input-registration"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            <label className="label-registration">Re-enter Password</label>
            <input
              className="input-registration"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <label className="label-registration">Aadhar Number</label>
            <input
              className="input-registration"
              type="text"
              name="aadharCardNumber"
              placeholder="Enter Aadhar number"
              value={formData.aadharCardNumber}
              onChange={handleChange}
            />

            <button type="submit" className="submit-button-registration">
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
