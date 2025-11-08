import React from 'react';
import { Link } from 'react-router-dom';

const stories = [
  { name: 'Sowmya', text: 'Donate blood, save lives!' },
  { name: 'Nandhini', text: 'On behalf of them, thank you for giving blood!' },
  { name: 'Gayathri', text: 'As a longtime blood donor, I’ve seen the difference donors make.' },
  { name: 'Anuhya', text: 'She told us why blood donation is such a great way to give back.' },
];

export default function StoriesSection() {
  return (
    <section className="stories-section">
      <h2>Inspiring Donor Stories</h2>

      <div className="stories-grid">
        {stories.map((s, idx) => (
          <div key={idx} className="story">
            <h4>{s.name}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <div className="btn-container">
        <Link className="btn-primary" to="/stories">See all Stories</Link>
      </div>
    </section>
  );
}
