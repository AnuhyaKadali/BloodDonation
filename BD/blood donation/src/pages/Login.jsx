import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL; // ✅ Backend URL from .env

  // -------------------------------------------------------
  // ✅ REGISTER (Saves to MongoDB via backend)
  // -------------------------------------------------------
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, {
        username,
        email,
        password,
      });

      alert("Registration Successful! Please Login.");
      setIsRegister(false);

    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed!");
      console.error("REGISTER ERROR:", err.response?.data);
    }
  };

  // -------------------------------------------------------
  // ✅ LOGIN (Validates from MongoDB backend)
  // -------------------------------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      // ✅ Store token & user details for protected pages
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(`Welcome, ${res.data.user.username}!`);
      navigate("/home");

    } catch (err) {
      alert(err.response?.data?.msg || "Invalid credentials. Try again!");
      console.error("LOGIN ERROR:", err.response?.data);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2 className="login-title">
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="login-input"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />

          <button type="submit" className="login-button">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <span
            className="toggle-link"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
