import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  // ✅ Keep the auto-redirect after 10 sec (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");   // ✅ go to LOGIN instead of home
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="landing-overlay">
        <h1 className="landing-title">Donate Blood, Save Lives ❤️</h1>
        <p className="landing-subtitle">
          Every drop counts — be the reason someone smiles today.
        </p>

        {/* ✅ FIXED — this now takes the user to LOGIN */}
        <button className="landing-btn" onClick={() => navigate("/login")}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Landingpage;
