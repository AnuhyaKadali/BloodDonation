
import React, { useState } from "react";

export default function DonatePage() {
  const questions = [
    "Are you between 18 and 65 years old?",
    "Do you weigh at least 50kg?",
    "Have you taken alcohol in the last 24 hours?",
    "Have you donated blood in the last 3 months?",
    "Are you currently on medication?",
    "For females: Are you pregnant or breastfeeding?",
    "Have you undergone surgery recently?",
  ];

  const questionImages = [
    "/assets/q1.jpg",
    "/assets/q2.jpg",
    "/assets/q3.jpg",
    "/assets/q4.jpg",
    "/assets/q5.jpg",
    "/assets/q6.jpg",
    "/assets/q7.jpg",
  ];

  const eligibleAnswers = ["yes", "yes", "no", "no", "no", "no", "no"];

  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [ineligible, setIneligible] = useState(false);
  const [submitted, setSubmitted] = useState(false); // NEW STATE

  const handleAnswer = (value) => {
    const newResponses = { ...responses, [index]: value };
    setResponses(newResponses);

    if (value !== eligibleAnswers[index]) {
      setIneligible(true);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      if (!ineligible) {
        setShowForm(true);
      }
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setResponses({});
    setShowForm(false);
    setIneligible(false);
    setSubmitted(false);
  };

  return (
    <div className="donate-page">

      {/* Question Slider */}
      {!showForm && !ineligible && !submitted && (
        <div className="question-section">
          <div
            className="question-slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {questions.map((q, i) => (
              <div className="slide" key={i}>
                <div className="left">
                  <h2>Eligibility Check</h2>
                  <p className="question">{q}</p>
                  <div className="btns">
                    <button className="yes" onClick={() => handleAnswer("yes")}>
                      Yes
                    </button>
                    <button className="no" onClick={() => handleAnswer("no")}>
                      No
                    </button>
                  </div>
                  <span className="progress">
                    Question {i + 1} / {questions.length}
                  </span>
                </div>
                <div className="right">
                  <img src={questionImages[i]} alt={`Question ${i + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Not Eligible Message */}
      {ineligible && !showForm && !submitted && (
        <div className="form-section fade-in">
          <h2>Sorry, You Are Not Eligible to Donate</h2>
          <p>
            Based on your responses, you are currently not eligible to donate
            blood. Please try again later.
          </p>
          <button className="submit-btn" onClick={resetQuiz}>
            Retake Eligibility Test
          </button>
        </div>
      )}

      {/* Donor Registration Form */}
      {showForm && !submitted && (
        <div className="form-section fade-in">
          <h2>Donor Registration Form</h2>
          <form
            className="donor-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true); // SHOW SUCCESS MESSAGE
            }}
          >
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <select required>
              <option value="">Select Blood Group</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="City" required />
            <button className="submit-btn" type="submit">
              Submit Request
            </button>
          </form>
        </div>
      )}

      {/* Success Message */}
      {submitted && (
        <div className="form-section fade-in success-message">
          <h2>Successfully Submitted</h2>
          <p>Thank you for your willingness to donate. We will contact you soon.</p>
          <button className="submit-btn" onClick={resetQuiz}>
            Done
          </button>
        </div>
      )}
    </div>
  );
}