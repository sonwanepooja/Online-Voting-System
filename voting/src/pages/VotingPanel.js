import React, { useEffect, useState } from "react";
import "../components/VotingPanel.css";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const VotingPanel = () => {
  const navigate = useNavigate();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [voter, setVoter] = useState(null);
  const params = useParams();

  // Fetch candidates from backend
  const getElectionCandidateData = async () => {
    try {
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (!authData) {
        console.error("No auth data found in cookies");
        return;
      }

      const { token } = authData;

      const response = await fetch(
        `http://localhost:8081/election/${params?.id}/candidates`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`, // uncomment if protected
          },
        }
      );

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Failed to fetch candidates");
      }

      const data = await response.json();

      // Keep backend _id to use for voting
      const formattedCandidates = data.candidates.map((c) => ({
        _id: c._id,
        shortName: c.name.split(" ")[0],
        name: c.name,
        age:
          c.age ||
          (c.dateOfBirth
            ? new Date().getFullYear() - new Date(c.dateOfBirth).getFullYear()
            : null),
        party: c.party || "Independent",
        email: c.email,
        mobile: c.mobile,
        aadharCardNumber: c.aadharCardNumber,
        voteCount: c.voteCount || 0, // 👈 include voteCount
      }));

      setCandidates(formattedCandidates);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const getVoterData = async () => {
    try {
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (!authData) return;

      const { id, token } = authData;

      const response = await fetch(`http://localhost:8081/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch voter data");

      const data = await response.json();
      setVoter(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  // Submit vote using backend _id
  const handleSubmitVote = async () => {
    if (!selectedCandidate) {
      alert("Please select a candidate first");
      return;
    }

    if (voter?.isVoted) {
      alert("You have already voted. Voting again is not allowed.");
      return;
    }

    try {
      // Step 1: Submit vote to candidate
      const voteResponse = await fetch(
        `http://localhost:8081/candidate/vote/${selectedCandidate._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!voteResponse.ok) {
        const errMsg = await voteResponse.text();
        throw new Error(errMsg || "Vote submission failed");
      }

      // Step 2: Update user as voted
      const authData = Cookies.get("authData")
        ? JSON.parse(Cookies.get("authData"))
        : null;

      if (authData) {
        const { id, token } = authData;

        await fetch(`http://localhost:8081/user/${id}/voted`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ isVoted: true }),
        });
      }

      alert("Vote submitted successfully!");
      setVoter({ ...voter, isVoted: true }); // update UI state
    } catch (error) {
      console.error(error);
      alert("Error submitting vote");
    }
  };

  const handleLogout = () => {
    Cookies.remove("authToken"); // remove token from cookies
    navigate("/login"); // redirect to login page
  };

  useEffect(() => {
    getElectionCandidateData();
    getVoterData();
  }, []);

  return (
    <div className="voting-container-voting-panel">
      <h2 className="panel-title">Voting Panel</h2>

      {voter?.isVoted ? (
        <>
          <p style={{ color: "red", fontWeight: "bold" }}>
            You have already voted. Voting again is not allowed.
          </p>

          {/* Show candidates with vote counts */}
          {candidates.map((c) => (
            <div key={c._id} className="candidate-card">
              {/* <div className="candidate-header">
                <span className="name">{c.shortName || c.name}</span>
                <span className="party">{c.party}</span>
              </div> */}
              <div className="candidate-details-wrapper">
                <div className="candidate-details">
                  <span>
                    <b>Name:</b> {c.name}
                  </span>
                  {c.age && (
                    <span>
                      <b>Age:</b> {c.age}
                    </span>
                  )}
                  <span>
                    <b>Party:</b> {c.party}
                  </span>
                  {c.email && (
                    <span>
                      <b>Email:</b> {c.email}
                    </span>
                  )}
                  {c.mobile && (
                    <span>
                      <b>Mobile:</b> {c.mobile}
                    </span>
                  )}
                  {c.aadharCardNumber && (
                    <span>
                      <b>Aadhar:</b> {c.aadharCardNumber}
                    </span>
                  )}
                  <span>
                    <b>Vote Count:</b> {c.voteCount||0}
                  </span>{" "}
                  {/* 👈 Always show votes */}
                </div>
              </div>
            </div>
          ))}

          <button className="submit-btn" onClick={() => navigate(-1)}>
            Back
          </button>

          <button className="submit-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          {[...candidates]
            .sort((a, b) => (selectedCandidate?._id === a._id ? -1 : 0))
            .map((c) => (
              <div
                key={c._id}
                className={`candidate-card ${
                  selectedCandidate?._id === c._id ? "selected" : ""
                }`}
              >
                <div
                  className={`candidate-header ${
                    selectedCandidate?._id === c._id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCandidate(c)}
                >
                  <input
                    type="radio"
                    name="vote"
                    checked={selectedCandidate?._id === c._id}
                    readOnly
                  />
                  <span className="name">{c.shortName || c.name}</span>
                  <span className="party">{c.party}</span>
                  <span className="arrow">
                    {selectedCandidate?._id === c._id ? "›" : "⌄"}
                  </span>
                </div>

                {selectedCandidate?._id === c._id && (
                  <div className="candidate-details-wrapper">
                    <div className="candidate-details">
                      <span>
                        <b>Name:</b> {c.name}
                      </span>
                      {c.age && (
                        <span>
                          <b>Age:</b> {c.age}
                        </span>
                      )}
                      <span>
                        <b>Party:</b> {c.party}
                      </span>
                      {c.email && (
                        <span>
                          <b>Email:</b> {c.email}
                        </span>
                      )}
                      {c.mobile && (
                        <span>
                          <b>Mobile:</b> {c.mobile}
                        </span>
                      )}
                      {c.aadharCardNumber && (
                        <span>
                          <b>Aadhar:</b> {c.aadharCardNumber}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

          {selectedCandidate && (
            <div className="confirmation">
              <input type="checkbox" checked readOnly /> I have selected{" "}
              <b>{selectedCandidate.shortName || selectedCandidate.name}</b>{" "}
              from <b>{selectedCandidate.party}</b> as my candidate.
            </div>
          )}

          <button className="submit-btn" onClick={handleSubmitVote}>
            SUBMIT
          </button>
        </>
      )}
    </div>
  );
};

export default VotingPanel;
