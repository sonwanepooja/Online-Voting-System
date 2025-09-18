import React, { useState } from "react";
import "../components/VotingPanel.css";

const candidates = [
  {
    id: 1,
    shortName: "Baburao",
    name: "Baburao Ganpatrao Apte",
    age: 58,
    party: "Independent",
    education: "BA (English Hons.)",
    symbol: "👓",
  },
  {
    id: 2,
    shortName: "Narendra Modi",
    name: "Narendra Modi",
    party: "BJP",
    symbol: "🪷",
  },
  {
    id: 3,
    shortName: "Rahul Gandhi",
    name: "Rahul Gandhi",
    party: "Congress",
    symbol: "✋",
  },
  {
    id: 4,
    shortName: "Arvind Kejriwal",
    name: "Arvind Kejriwal",
    party: "AAP",
    symbol: "✔️",
  },
];

const VotingPanel = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const sortedCandidates = selectedCandidate
    ? [
        selectedCandidate,
        ...candidates.filter((c) => c.id !== selectedCandidate.id),
      ]
    : candidates;

  return (
    <div className="voting-container-voting-panel">
      <h2 className="panel-title">Voting Panel</h2>

      {sortedCandidates.map((c) => (
        <div
          key={c.id}
          className={`candidate-card ${
            selectedCandidate?.id === c.id ? "selected" : ""
          }`}
        >
          <div
            // className="candidate-header"
             className={`candidate-header ${
            selectedCandidate?.id === c.id ? "selected" : ""
          }`}
            onClick={() => setSelectedCandidate(c)}
          >
            <input
              type="radio"
              name="vote"
              color="red"
              checked={selectedCandidate?.id === c.id}
              readOnly
            />
            <span className="name">{c.shortName || c.name}</span>
            <span className="party">{c.party}</span>
            <span className="symbol">{c.symbol}</span>
            <span className="arrow">
              {selectedCandidate?.id === c.id ? "›" : "⌄"}
            </span>
          </div>

          {selectedCandidate?.id === c.id && (
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
              {c.education && (
                <span>
                  <b>Education:</b> {c.education}
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
          <b>{selectedCandidate.shortName || selectedCandidate.name}</b> from{" "}
          <b>{selectedCandidate.party}</b> as my candidate.
        </div>
      )}

      <button className="submit-btn">SUBMIT</button>
    </div>
  );
};

export default VotingPanel;
