import React from "react";
import { FaUserEdit, FaSignInAlt, FaThLarge, FaKey, FaCheckSquare } from "react-icons/fa";
import "../components/Rules.css"

const Rules = () => {
  return <div className="steps-container">
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
          <FaCheckSquare className="step-icon" />
          <p>Vote your candidate and submit</p>
        </div>
      </div>
    </div>
};

export default Rules;
