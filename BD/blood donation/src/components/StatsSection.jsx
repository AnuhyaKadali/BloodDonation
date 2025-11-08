import React from 'react';

export default function StatsSection() {
  return (
    <section className="stats">
      <h2>Blood Types Needed</h2>
      <ul className="blood-types">
        <li><strong>O+</strong> – 6 days</li>
        <li><strong>O-</strong> – 4 days</li>
        <li><strong>A+</strong> – 6 days</li>
        <li><strong>B+</strong> – 6 days</li>
        <li><strong>AB+</strong> – 6 days</li>
        <li><strong>AB-</strong> – (data etc)</li>
      </ul>
      <a className="btn" href="/schedule">Schedule Appointment</a>
    </section>
  );
}
