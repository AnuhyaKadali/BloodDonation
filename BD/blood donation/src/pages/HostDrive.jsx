import React, { useState } from "react";
import axios from "axios";

const HostDrive = () => {
  const [formData, setFormData] = useState({
    organizerName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",   // ✅ Correct field
    driveTitle: "",
    date: "",
    time: "",
    venue: "",
    state: "",
    district: "",
    expectedDonors: "",
    notes: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const states = {
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    AndhraPradesh: ["Vijayawada", "Guntur", "Visakhapatnam", "Tirupati"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/host-drive/create`, formData);  // ✅ Send entire formData

      setSuccessMessage("✅ Drive submitted successfully!");

      setFormData({
        organizerName: "",
        contactPerson: "",
        email: "",
        phoneNumber: "",  // ✅ reset correctly
        driveTitle: "",
        date: "",
        time: "",
        venue: "",
        state: "",
        district: "",
        expectedDonors: "",
        notes: "",
      });

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      alert("❌ Error submitting drive. Check backend.");
      console.error(err);
    }
  };

  return (
    <div className="host-drive-container">
      <h2 className="title">Host a Blood Donation Drive</h2>
      <p className="subtitle">Bring your community together — organize a blood donation camp and help save lives!</p>

      {successMessage && <p className="success-msg">{successMessage}</p>}

      <form className="host-drive-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Organizer Name</label>
          <input type="text" name="organizerName" value={formData.organizerName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact Person</label>
          <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required maxLength="10" />
        </div>

        <div className="form-group">
          <label>Drive Title</label>
          <input type="text" name="driveTitle" value={formData.driveTitle} onChange={handleChange} required />
        </div>

        <div className="form-inline">
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input type="text" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Venue</label>
          <textarea name="venue" value={formData.venue} onChange={handleChange} required />
        </div>

        <div className="form-inline">
          <div className="form-group">
            <label>State</label>
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>District</label>
            <select name="district" value={formData.district} onChange={handleChange} required>
              <option value="">Select District</option>
              {formData.state &&
                states[formData.state].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Expected Number of Donors</label>
          <input type="number" name="expectedDonors" value={formData.expectedDonors} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit Drive Request</button>
      </form>
    </div>
  );
};

export default HostDrive;
