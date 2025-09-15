import React, { useState } from "react";
import "../components/Login.css";
import LOGIN_IMAGE from "../Images/login_svg.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!aadharCardNumber || !password) {
      alert("Please enter both aadharCardNumber and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aadharCardNumber, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);
      navigate("./personal-info")
      // You can redirect or save token here
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed! Check your credentials.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <img
          src={LOGIN_IMAGE}
          alt="Login Illustration"
          className="illustration"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Login</h2>
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={aadharCardNumber}
            onChange={(e) => setAadharCardNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="links">
            <a href="#">Forgot Password?</a>
            <p>
              Not a user? <a href="#">Register now</a>
            </p>
          </div>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
