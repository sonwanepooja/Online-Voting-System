import React from "react";
import {
  FaUserEdit,
  FaSignInAlt,
  FaThLarge,
  FaKey,
  FaCheckSquare,
} from "react-icons/fa";
import "../components/Rules.css";
import VECTOR_IMAGE from "../Images/Vector (1).svg";

const Rules = () => {
  return (
    <div className="steps-container">
      <h1 className="steps-title">
        Follow these <span>easy steps</span>
      </h1>

      <div className="steps-list">
        <div className="step-item">
          <FaUserEdit className="step-icon" />
          <p>Register yourself by filling the required informations</p>
        </div>

        <div className="step-item">
          <FaSignInAlt className="step-icon" />
          <p>Signin as user</p>
        </div>

        <div className="step-item">
          <FaThLarge className="step-icon" />
          <p>Go to vote option on dashboard</p>
        </div>

        <div className="step-item">
          <FaKey className="step-icon" />
          <p>Give security key</p>
        </div>

        <div className="step-item">
          {/* <FaCheckSquare className="step-icon" /> */}
          <p>
            <img
              src={VECTOR_IMAGE}
              alt="faster-vote"
              style={{ width: "60px", height: "60px", marginLeft: "-17px" }}
            />
            ,{" "}
          </p>

          <p style={{ marginRight: "-6px" }}>Vote your candidate and submit</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
