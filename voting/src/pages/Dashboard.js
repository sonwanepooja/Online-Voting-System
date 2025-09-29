import React from "react";
import "../components/AdminDashboard.css";

const Dashboard = () => {
  return (
    <div>
      {/* Dashboard Stats */}
      <section className="stats">
        <div className="card">Total Users: 1200</div>
        <div className="card">Candidates: 15</div>
        <div className="card">Votes Cast: 845</div>
        <div className="card">Ongoing Elections: 2</div>
      </section>

      {/* Voting Results Preview */}
      <section className="results">
        <h2>Live Voting Results</h2>
        <table>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Votes</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Candidate A</td>
              <td>350</td>
              <td>41%</td>
            </tr>
            <tr>
              <td>Candidate B</td>
              <td>290</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Candidate C</td>
              <td>205</td>
              <td>25%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
