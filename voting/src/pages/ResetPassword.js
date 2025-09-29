import React, { useState } from "react";
import "../components/ResetPassword.css";
import LOGIN_IMAGE from "../Images/login_svg.svg";

const ForgotPassword = () => {
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleForgot = async () => {
    if (!aadharCardNumber) {
      setMessage("⚠️ Please enter your Aadhar Card Number");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/user/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aadharCardNumber }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed");

      // Just show generic message for testing
      setMessage("✅ Reset link generated! Check backend console for link (testing).");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img src={LOGIN_IMAGE} alt="Illustration" className="illustration" />
      </div>

      <div className="right-section-reset-password">
        <h2>Forgot Password</h2>
        <input
        style={{padding:"10px",marginBottom:"20px"}}
          type="text"
          placeholder="Aadhar Card Number"
          value={aadharCardNumber}
          onChange={(e) => setAadharCardNumber(e.target.value)}
        />
        <button onClick={handleForgot} style={{padding:"10px"}}>Request Reset</button>
        {message && (
          <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
