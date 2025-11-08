import React from "react";

const UpcomingPage = () => {
  const apDistricts = [
    {
      name: "Srikakulam",
      upcoming: "Mega camp at RTC Complex - Nov 15",
      previous: "Blood camp at Govt Hospital - Oct 20",
    },
    {
      name: "Vizianagaram",
      upcoming: "Red Cross drive - Nov 20",
      previous: "District hospital camp - Oct 10",
    },
    {
      name: "Visakhapatnam",
      upcoming: "Beach Road event - Nov 25",
      previous: "RK Beach camp - Sep 30",
    },
    {
      name: "Anakapalli",
      upcoming: "College camp - Dec 5",
      previous: "Hospital event - Oct 1",
    },
    {
      name: "Alluri Sitharama Raju",
      upcoming: "Tribal zone camp - Nov 12",
      previous: "Medical camp - Oct 7",
    },
    {
      name: "Parvathipuram Manyam",
      upcoming: "Town camp - Nov 18",
      previous: "Mandala drive - Oct 5",
    },
    {
      name: "Kakinada",
      upcoming: "University drive - Nov 19",
      previous: "Medical college - Oct 9",
    },
    {
      name: "East Godavari",
      upcoming: "Rajahmundry event - Nov 22",
      previous: "Riverfront camp - Oct 15",
    },
    {
      name: "Konaseema",
      upcoming: "Amalapuram camp - Nov 10",
      previous: "School camp - Oct 2",
    },
    {
      name: "Eluru",
      upcoming: "Eluru Club event - Nov 30",
      previous: "Blood bank drive - Oct 21",
    },
    {
      name: "West Godavari",
      upcoming: "Bhimavaram camp - Dec 3",
      previous: "Community center - Oct 8",
    },
    {
      name: "Krishna",
      upcoming: "Benz Circle camp - Nov 29",
      previous: "Red Cross camp - Oct 12",
    },
    {
      name: "NTR",
      upcoming: "NTR Stadium camp - Nov 26",
      previous: "City drive - Oct 6",
    },
    {
      name: "Guntur",
      upcoming: "Guntur College event - Nov 23",
      previous: "Mega drive - Oct 13",
    },
    {
      name: "Palnadu",
      upcoming: "Narasaraopet camp - Nov 17",
      previous: "Rural camp - Oct 4",
    },
    {
      name: "Bapatla",
      upcoming: "Engineering college - Nov 14",
      previous: "Town hall - Oct 3",
    },
    {
      name: "Prakasam",
      upcoming: "Ongole beach camp - Nov 20",
      previous: "District HQ - Oct 9",
    },
    {
      name: "Nellore",
      upcoming: "Apollo Blood Center - Nov 21",
      previous: "Community hall - Oct 10",
    },
    {
      name: "Kurnool",
      upcoming: "Town hall - Nov 27",
      previous: "Medical college - Oct 12",
    },
    {
      name: "Nandyal",
      upcoming: "Railway station camp - Nov 15",
      previous: "Rural hospital - Oct 8",
    },
    {
      name: "Anantapur",
      upcoming: "Arts college - Nov 24",
      previous: "Town camp - Oct 6",
    },
    {
      name: "Sri Sathya Sai",
      upcoming: "Puttaparthi hospital - Nov 28",
      previous: "College drive - Oct 9",
    },
    {
      name: "YSR Kadapa",
      upcoming: "YSR Stadium - Nov 22",
      previous: "City event - Oct 13",
    },
    {
      name: "Chittoor",
      upcoming: "Municipal ground - Nov 30",
      previous: "Town event - Oct 11",
    },
    {
      name: "Tirupati",
      upcoming: "SVIMS Blood Bank - Nov 18",
      previous: "Temple town camp - Oct 5",
    },
    {
      name: "Annamayya",
      upcoming: "Rajampet hospital - Nov 19",
      previous: "District center - Oct 7",
    },
  ];

  return (
    <div className="apmap-container">
      <h2 className="section-title">
        Upcoming Blood Donation Camps in Andhra Pradesh
      </h2>

      <div className="camps-grid">
        {apDistricts.map((district, index) => (
          <div key={index} className="camp-card">
            <h3>{district.name}</h3>
            <div className="camp-details">
              <p className="upcoming">
                <strong>Upcoming:</strong> {district.upcoming}
              </p>
              <p className="previous">
                <strong>Previous:</strong> {district.previous}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
