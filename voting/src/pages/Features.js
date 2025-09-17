import React from "react";
import "../components/Features.css";
import { FaLock, FaLaptop, FaThumbsUp, FaDollarSign, FaClock } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const Features = () => {
  const features = [
    { icon: <FaLock />, text: "Secured by 256 bit encryption" },
    { icon: <SiEthereum />, text: "Backed by ethereum based technology" },
    { icon: <FaLaptop />, text: "Verifiable transactions" },
    { icon: <FaThumbsUp />, text: "Easy to use" },
    { icon: <FaDollarSign />, text: "Cheaper than ballot voting system" },
    { icon: <FaClock />, text: "Faster voting process" },
  ];

  return (
    <div className="features-container">
      <div className="features-title">
        <h2>Features</h2>
      </div>
      <div className="features-list">
        {features.map((item, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
