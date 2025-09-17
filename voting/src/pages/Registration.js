import React from "react";
import "../components/Registration.css";
import REGISTRATION_IMAGE from "../Images/Figure.svg";

const Registration = () => {
  return (
    <div className="form-container">
      {/* Left side image/illustration */}
      <div className="form-image">
        <img src={REGISTRATION_IMAGE} alt="illustration" />
      </div>

      {/* Right side form */}
      <div className="form-box">
        <span style={{ fontSize: "45px", fontFamily: "serif" }}>
          Registration form
        </span>
        <form>
          <label className="label-registration">Name</label>
          <input
            className="input-registration"
            type="text"
            placeholder="Enter your name"
          />

          <label className="label-registration">Date Of Birth</label>
          <input className="input-registration" type="date" />

          <label className="label-registration">Father's / Mother's Name</label>
          <input
            className="input-registration"
            type="text"
            placeholder="Enter parent's name"
          />

          <label className="label-registration">Email</label>
          <input
            className="input-registration"
            type="email"
            placeholder="Enter email"
          />

          <label className="label-registration">Mobile No.</label>
          <input
            className="input-registration"
            type="tel"
            placeholder="Enter mobile number"
          />

          <label className="label-registration">Password</label>
          <input
            className="input-registration"
            type="password"
            placeholder="Enter password"
          />

          <label className="label-registration">Re-enter Password</label>
          <input
            className="input-registration"
            type="password"
            placeholder="Re-enter password"
          />

          <label className="label-registration">Aadhar Number</label>
          <input
            className="input-registration"
            type="text"
            placeholder="Enter Aadhar number"
          />

          <button type="submit" className="submit-button-registration">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
