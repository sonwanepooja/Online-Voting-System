import React from "react";
import "../components/About.css";
import { useLocation } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-heading">
        <h2>About</h2>
      </div>
      <div className="about-content">
        <p>
          An online voting system that will replace the old ballot system or
          paper system. Over the time we have utilized the required technology
          in every sector to improve efficiency and save the extra resources.
          But the voting system is still very expensive and requires a bigger
          workforce. The system is slower and still not completely tamper proof.
          We bring the system that is safe, reliable and solve the modern issues
          like higher reachability of the booth, crowd free voting, inexpensive,
          faster results and others.
        </p>
      </div>
    </section>
  );
};

export default About;
