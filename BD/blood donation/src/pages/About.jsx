import React from "react";


export default function About() {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About RedPulse</h1>
        <p>Connecting hearts through the gift of life.</p>
      </div>

      {/* Intro Paragraph */}
      <div className="about-intro">
        <p>
          <strong>RedPulse</strong> is a not-for-profit initiative that connects
          donors, hospitals, and recipients to make blood donation faster,
          smarter, and more accessible. Our platform is built to ensure that no
          request for blood goes unanswered.
        </p>
      </div>

      {/* Main Content */}
      <div className="about-sections">
        <div className="about-section fade-in">
          <h2>Our Mission</h2>
          <p>
            To create a nationwide network of voluntary blood donors and empower
            hospitals with real-time access to lifesaving resources.
          </p>
        </div>

        <div className="about-section fade-in">
          <h2>What We Do</h2>
          <ul>
            <li>Instantly connect donors and recipients nearby.</li>
            <li>Support hospitals in managing blood inventories.</li>
            <li>Spread awareness about regular donation and safety.</li>
          </ul>
        </div>

        <div className="about-section fade-in">
          <h2>Join the Cause</h2>
          <p>
            Every drop counts. Join RedPulse — donate blood, spread awareness,
            and inspire others to save lives. Together, we create a ripple of
            compassion and hope.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="about-quote">
        <blockquote>
          “A single pint can save three lives.  
          A single act can create infinite hope.”
        </blockquote>
      </div>
    </section>
  );
}
