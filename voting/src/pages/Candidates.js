import React, { useState } from "react";
import "../components/candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Candidate A", party: "Party X", votes: 350 },
    { id: 2, name: "Candidate B", party: "Party Y", votes: 290 },
    { id: 3, name: "Candidate C", party: "Party Z", votes: 205 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCandidate, setNewCandidate] = useState({ name: "", party: "", votes: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prev) => ({ ...prev, [name]: name === "votes" ? Number(value) : value }));
  };

  const handleSave = () => {
    if (!newCandidate.name || !newCandidate.party) return alert("Please fill all fields");

    const id = candidates.length ? candidates[candidates.length - 1].id + 1 : 1;
    setCandidates([...candidates, { ...newCandidate, id }]);
    setNewCandidate({ name: "", party: "", votes: 0 });
    setShowModal(false);
  };

  return (
    <div className="candidates">
      <header className="candidates-header">
        <h2>Candidates</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Candidate
        </button>
      </header>

      <table className="candidates-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Party</th>
            <th>Votes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.name}</td>
              <td>{c.party}</td>
              <td>{c.votes}</td>
              <td>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Add Candidate</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newCandidate.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="party"
              placeholder="Party"
              value={newCandidate.party}
              onChange={handleChange}
            />
            <input
            //   type="number"
              name="votes"
              placeholder="Votes"
              value={newCandidate.votes}
              onChange={handleChange}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;
