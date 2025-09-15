import React from "react";
import "../components/Home.css";
import LETS_GO from "../Images/lets_vote.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <img src={LETS_GO} alt="Let's Vote" />
      </div>
      <div className="home-right">
        <h2>Be a part of decision</h2>
        <h1>Vote Today</h1>
        <div className="btn-group">
          <button className="btn">Register</button>
          <button className="btn">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
