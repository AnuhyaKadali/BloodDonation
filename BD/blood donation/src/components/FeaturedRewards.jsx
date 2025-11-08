import React from 'react';

export default function FeaturedRewards() {
  return (
    <section className="featured-rewards">
      <h3>Featured Rewards Store Item</h3>
      <p>November 1-30: Check out our new insulated food container for only 800 points! Order this limited edition item with your points — it will ship directly to you for FREE.</p>
      <a className="btn" href="/rewards">View &amp; Shop our Rewards Store!</a>

      <div className="app-cta">
        <h4>Download our FREE ImpactLife App!</h4>
        <ul>
          <li>Find nearby donor centers & mobile blood drives and book appointments!</li>
          <li>Track your donation history and review wellness information!</li>
          <li>Use your points in our Donor Rewards Store!</li>
        </ul>
        <a className="btn" href="/app-download">Learn More</a>
      </div>
    </section>
  );
}
