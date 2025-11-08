import React from 'react';

const stories = [
  // 🩸 Initial stories
  { name: 'Sowmya', text: 'Donate blood, save lives!' },
  { name: 'Nandhini', text: 'On behalf of them, thank you for giving blood!' },
  { name: 'Gayathri', text: 'As a longtime blood donor, I’ve seen the difference donors make.' },
  { name: 'Anuhya', text: 'She told us why blood donation is such a great way to give back.' },

  // 🌟 Additional stories
  { name: 'Ravi', text: 'Ravi’s first donation saved a newborn in critical condition.' },
  { name: 'Priya', text: 'Priya organized a blood camp and inspired her community to donate.' },
  { name: 'Rahul', text: 'Rahul donates every 3 months and motivates others to follow suit.' },
  { name: 'Neha', text: 'Overcame her fear of needles and became a regular donor.' },
  { name: 'Arjun', text: 'After his father’s surgery, he pledged to donate blood regularly.' },
  { name: 'Community Heroes', text: 'A local club collected 300+ units in two days — true heroes!' },
];

export default function Stories() {
  return (
    <section className="stories-page">
      <h1>All Donor Stories</h1>
      <p>Real experiences that inspire others to donate and save lives.</p>

      <div className="stories-grid">
        {stories.map((s, idx) => (
          <div key={idx} className="story">
            <h4>{s.name}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
