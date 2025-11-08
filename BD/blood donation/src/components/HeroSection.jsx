import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

export default function HeroSection() {
  const navigate = useNavigate(); // ✅ initialize navigation

  return (
    <section
      className="hero-section"
      // ✅ Correct: use public path (no import)
      style={{ backgroundImage: `url("/assets/homepage.jpg")` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Donating <span>Blood</span>
          </h1>
          <p>
            Blood is made up of four main components — red blood cells,
            platelets, plasma, and white blood cells. Each whole blood donation
            has the potential to save up to three lives. Be the reason someone
            smiles today.
          </p>
          {/* ✅ Button redirects to Donate page */}
          <button className="cta-btn" onClick={() => navigate("/donate")}>
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
