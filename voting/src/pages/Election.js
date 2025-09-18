import React from "react";
import "../components/Election.css";
import VOTE_BUTTON from "../Images/voteButton.svg";
import { useNavigate } from "react-router-dom";

const Election = () => {
  const navigate = useNavigate();
  const handleClickVote = () => {
    navigate("/personal-info/vote");
  };
  return (
    <div className="election-container">
      {/* Navbar */}
      <nav className="navbar-election">
        <ul className="nav-links-election">
          <li>
            <a href="/personal-info">Personal Info</a>
          </li>
          <li>
            <a href="/personal-info/election">Elections</a>
          </li>
          <li>
            <a href="/personal-info/contact">Contact</a>
          </li>
          <li>
            {/* <button className="vote-btn">Vote</button> */}
            <img
              src={VOTE_BUTTON}
              alt="vote-button"
              style={{ cursor: "pointer" }}
              onClick={handleClickVote}
            />
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="election-content">
        <h3>Upcoming Elections :</h3>
        <div className="election-card">
          <span>UP state election:</span>
          <span>02-04-2022</span>
        </div>

        <h3>Other Elections :</h3>
        <div className="election-card">
          <span>Manipur state Election:</span>
          <span>04-04-2022</span>
        </div>
        <div className="election-card">
          <span>Chhatisgarh state Election:</span>
          <span>12-04-2022</span>
        </div>
        <div className="election-card">
          <span>Bangluru state Election:</span>
          <span>20-04-2022</span>
        </div>
        <div className="election-card">
          <span>Gurgaon Municipal Corporation</span>
          <span>26-04-2022</span>
        </div>
      </div>
    </div>
  );
};

export default Election;
