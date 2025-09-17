import React, { useState } from "react";
import "../components/Login.css";
import LOGIN_IMAGE from "../Images/login_svg.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // ✅ import js-cookie

const Login = () => {
  const navigate = useNavigate();
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!aadharCardNumber || !password) {
      setError("Please enter both Aadhar Card Number and password");
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

      // ✅ Save token in cookies (expires in 1 day)
      Cookies.set("authToken", data.token, { expires: 1, secure: true });

      navigate("/personal-info"); // redirect after login
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed! Check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img
          src={LOGIN_IMAGE}
          alt="Login Illustration"
          className="illustration"
        />
      </div>

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
            placeholder="Aadhar Card Number"
            value={aadharCardNumber}
            onChange={(e) => setAadharCardNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Show error message if login fails */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="links">
            <a href="#">Forgot Password?</a>
            <p>
              Not a user?{" "}
              <span
                style={{ color: "#007bff", cursor: "pointer" }}
                onClick={() => navigate("/registration")}
              >
                Register now
              </span>
            </p>
          </div>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
