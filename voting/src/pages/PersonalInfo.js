import React, { useEffect, useState } from "react";
import "../components/PersonalInfo.css";
import PROFILE_IMAGE from "../Images/Group 6.svg";
import VOTE_BUTTON from "../Images/voteButton.svg";
import edit_Vector from "../Images/edit_Vector.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editable, setEditable] = useState(false);

  const getUserData = async () => {
    try {
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (!authData) {
        console.error("No auth data found in cookies");
        return;
      }

      const { id, token } = authData;

      const response = await fetch(`http://localhost:8081/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  console.log(user);

  useEffect(() => {
    getUserData();
  }, []);

  const handleClickVote = () => {
    navigate("/personal-info/election");
  };

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleEditCancel = () => {
    setEditable(false);
    setUser({ ...user });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (!authData) {
        console.error("No auth data found in cookies");
        return;
      }

      const { token } = authData;

      const response = await fetch(`http://localhost:8081/user/${user?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // important
          // Authorization: `Bearer ${token}`,    // important if protected
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errMsg = await response.text(); // see backend error
        throw new Error(errMsg || "Failed to update profile");
      }

      const data = await response.json();
      setUser(data.user); // update local state with backend response
      setEditable(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

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
            onClick={handleClickVote}
          />
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
              {editable ? (
                ""
              ) : (
                <button className="edit-profile-btn" onClick={handleEditToggle}>
                  <span className="edit-icon">
                    <img src={edit_Vector} alt="edit" />
                  </span>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - User Info */}
        <div className="info-section">
          <div className="info-grid">
            {/* Name */}
            <div className="info-item">
              <label className="info-label">Name</label>
              {editable ? (
                <input
                  type="text"
                  name="name"
                  value={user.name || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className={editable ? "user-name" : "info-value"}>
                  {user.name}
                </p>
              )}
            </div>

            {/* Father's Name */}
            <div className="info-group">
              <div className="info-item">
                <label className="info-label">Father's/Mother's Name</label>
                {editable ? (
                  <input
                    type="text"
                    name="parentsName"
                    value={user.parentsName || ""}
                    onChange={handleChange}
                    className="info-input"
                  />
                ) : (
                  <p className="info-value">{user.parentsName}</p>
                )}
              </div>
            </div>

            <div className="info-item">
              <label className="info-label">Date Of Birth</label>

              {editable ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={
                    user.dateOfBirth
                      ? new Date(user.dateOfBirth).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">
                  {user.dateOfBirth
                    ? new Date(user.dateOfBirth).toISOString().split("T")[0]
                    : "N/A"}
                </p>
              )}
            </div>

            {/* Age and Contact */}
            {/* <div className="info-row"> */}
            <div className="info-item">
              <label className="info-label">Age</label>
              {editable ? (
                <input
                  type="number"
                  name="age"
                  value={user.age || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">{user.age}</p>
              )}
            </div>

            {/* </div> */}

            <div className="info-item">
              <label className="info-label">Contact</label>
              {editable ? (
                <input
                  type="text"
                  name="mobile"
                  value={user.mobile || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">{user.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div className="info-item">
              <label className="info-label">Email</label>
              {editable ? (
                <input
                  type="email"
                  name="email"
                  value={user.email || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">{user.email}</p>
              )}
            </div>

            {/* Aadhar Number */}
            <div className="info-item">
              <label className="info-label">Aadhar Number</label>
              {editable ? (
                <input
                  type="text"
                  name="aadharCardNumber"
                  value={user.aadharCardNumber || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">{user.aadharCardNumber}</p>
              )}
            </div>

            {/* Address */}
            <div className="info-item">
              <label className="info-label">Address</label>
              {editable ? (
                <input
                  type="text"
                  name="address"
                  value={user.address || ""}
                  onChange={handleChange}
                  className="info-input"
                />
              ) : (
                <p className="info-value">{user.address}</p>
              )}
            </div>

            {/* Status Row */}
            <div className="status-row">
              <div className="status-item">
                <label className="info-label">Eligible</label>
                <p className="status-value true">
                  {user.eligible ? "True" : "False"}
                </p>
              </div>
              <div className="status-item">
                <label className="info-label">Voted</label>
                <p className="status-value true">
                  {user.voted ? "True" : "False"}
                </p>
              </div>
            </div>

            <div className="status-row">
              {editable && (
                <>
                  <button className="save-profile-btn" onClick={handleSave}>
                    Save
                  </button>
                  <button
                    className="save-profile-btn"
                    onClick={handleEditCancel}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
