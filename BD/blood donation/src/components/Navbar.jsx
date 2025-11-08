import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/assets/Logo.png" alt="RedPulse Logo" className="logo-img" />
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/host-drive">Host a Drive</Link></li>
          <li><Link to="/upcoming-camps">Upcoming Camps</Link></li>
          <li><Link to="/about">About</Link></li>

          {loggedInUser ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}