// FeedbackForm.js
import React from 'react';
import '../App.css'; // Import your CSS file here

const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <h3>Tell us more (Optional)</h3>
      <textarea rows="4" cols="50"></textarea>
    </div>
  );
};

export default FeedbackForm;
