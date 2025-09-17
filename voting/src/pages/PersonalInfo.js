import React from "react";
import "../components/PersonalInfo.css";
import PROFILE_IMAGE from "../Images/Group 6.svg";
import VOTE_BUTTON from "../Images/voteButton.svg";
import edit_Vector from "../Images/edit_Vector.svg";

const PersonalInfo = () => {
  return (
    <div className="dashboard-container-personal-info">
      {/* Navigation */}
      <nav className="navbar-personal-info">
        <div className="nav-links-personal-info">
          <a href="/personal-info" className="nav-link-personal-info">
            Personal Info
          </a>
          <a href="/personal-info/election" className="nav-link-personal-info">
            Elections
          </a>
          <a href="/personal-info/contact" className="nav-link-personal-info">
            Contact
          </a>
          <img
            src={VOTE_BUTTON}
            alt="vote-button"
            style={{ cursor: "pointer" }}
          />
          {/* <button className="vote-btn">Vote</button> */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content-personal-info">
        {/* Left Section - Profile */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-image">
                <img
                  src={PROFILE_IMAGE}
                  alt="profile-image"
                  height={200}
                  width={200}
                />
              </div>
            </div>

            <div className="profile-buttons">
              <button className="change-picture-btn">
                Change profile picture
              </button>
              <button className="edit-profile-btn">
                <span className="edit-icon">
                  {" "}
                  <img src={edit_Vector} />
                </span>
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - User Info */}
        <div className="info-section">
          <div className="info-grid">
            {/* Name */}
            <div className="info-item">
              <label className="info-label">Name</label>

              <p className="user-name">John Doe</p>
            </div>

            {/* Father's Name */}
            <div className="info-group">
              <div className="info-item">
                <label className="info-label">Father's/Mother's Name</label>
                <p className="info-value">Papa John Doe</p>
              </div>
            </div>

            {/* Age and Contact */}
            <div className="info-row">
              <div className="info-item">
                <label className="info-label">Age</label>
                <p className="info-value">19</p>
              </div>
              <div className="info-item">
                <label className="info-label">Contact</label>
                <p className="info-value">+91 9191505600</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-item">
              <label className="info-label">Email</label>
              <p className="info-value">john.doe@gmail.com</p>
            </div>

            {/* Aadhar Number */}
            <div className="info-item">
              <label className="info-label">Aadhar Number</label>
              <p className="info-value">6100 4980 9126 0999</p>
            </div>

            {/* Address */}
            <div className="info-item">
              <label className="info-label">Address</label>
              <p className="info-value">
                XYZ, Street No. 92, Gurgaon, Uttar Pardesh, 100024
              </p>
            </div>

            {/* Status Row */}
            <div className="status-row">
              <div className="status-item">
                <label className="info-label">Eligible</label>
                <p className="status-value true">True</p>
              </div>
              <div className="status-item">
                <label className="info-label">Voted</label>
                <p className="status-value true">True</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
