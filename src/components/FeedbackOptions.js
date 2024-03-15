// FeedbackOptions.js
import React, { useState } from 'react';
import '../App.css'; // Import your CSS file here

const FeedbackOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="feedback-options">
      <h3>What did you like?</h3>
      <div className="options">
        <div
          className={selectedOptions.includes("Polite Attitude") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Polite Attitude")}
        >
          Polite Attitude
        </div>
        <div
          className={selectedOptions.includes("Fast Service") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Fast Service")}
        >
          Fast Service

        </div>
        <div
          className={selectedOptions.includes("Friendliness") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Friendliness")}
        >
          Friendliness

        </div>
        <div
          className={selectedOptions.includes("Professionalism") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Professionalism")}
        >
          Professionalism

        </div>
        <div
          className={selectedOptions.includes("Cleanliness") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Cleanliness")}
        >
          Cleanliness

        </div>
        <div
          className={selectedOptions.includes("Accuracy") ? "option selected" : "option"}
          onClick={() => handleOptionClick("Accuracy")}
        >
          Accuracy
        </div>
      </div>
    </div>
  );
};

export default FeedbackOptions;
