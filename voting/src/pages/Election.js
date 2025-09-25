import React, { useEffect, useState } from "react";
import "../components/Election.css";
import VOTE_BUTTON from "../Images/voteButton.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Election = () => {
  const [elections, setElectionData] = useState([]);
  const navigate = useNavigate();

  const handleClickVote = () => {
    navigate("/personal-info/vote");
  };

  const getElectionData = async () => {
    try {
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (!authData) {
        console.error("No auth data found in cookies");
        return;
      }

      const { token } = authData;

      const response = await fetch("http://localhost:8081/election/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch elections");
      }

      const data = await response.json();
      setElectionData(data);
    } catch (error) {
      console.error("Error fetching elections:", error);
    }
  };

  useEffect(() => {
    getElectionData();
  }, []);

  // 🔹 Group elections by status
  const groupedElections = elections.reduce((acc, el) => {
    if (!acc[el.status]) acc[el.status] = [];
    acc[el.status].push(el);
    return acc;
  }, {});

  // 🔹 Navigate with electionId
  const handleElectionClick = (id, status) => {
    console.log(id, "id", status);
    if (status !== "ongoing") {
      alert("You can vote only in Ongoing elections.");
      return;
    }
    navigate("/personal-info/vote", {
      state: { electionId: id },
    });
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
        {Object.keys(groupedElections).length > 0 ? (
          Object.keys(groupedElections).map((status) => (
            <div key={status}>
              <h3 className="election-content">{status} Elections :</h3>
              {groupedElections[status].map((el) => (
                <div
                  key={el._id}
                  className="election-card"
                  onClick={() => handleElectionClick(el._id, status)}
                >
                  <span>{el.name}</span>
                  <span>
                    {new Date(el.startDate).toLocaleDateString()} -{" "}
                    {new Date(el.endDate).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No elections available</p>
        )}
      </div>
    </div>
  );
};

export default Election;
