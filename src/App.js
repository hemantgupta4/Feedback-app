// App.js
import React from 'react';
import './App.css'; // Import your CSS file here
import ManagerInfo from './components/ManagerInfo';
import StarRating from './components/StarRating';
import FeedbackOptions from './components/FeedbackOptions';
import FeedbackForm from './components/FeedbackForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 


function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="back-button">
          <ArrowBackIcon style={{ color: '#333', marginRight: '10px' }} />
        </div>
        <h3 style={{ color: '#333' }}>Pay Tip</h3>
      </div>
      <ManagerInfo />
      <StarRating />
      <FeedbackOptions />
      <FeedbackForm />
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default App;
