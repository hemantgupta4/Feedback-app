// StarRating.js
import React, { useState } from 'react';
import '../App.css'; // Import your CSS file here
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Import hollow Star icon from Material-UI
import StarIcon from '@mui/icons-material/Star'; // Import filled Star icon from Material-UI
import emojiImage from '../images/emoji.png';


const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleMouseEnter = (starValue) => {
    setRating(starValue);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  const handleClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="star-rating-section">
      <h3>Rate your experience</h3>
      <div className="star-rating-input">
        {[...Array(5)].map((star, i) => {
          const starValue = i + 1;
          return (
            <div
              key={i}
              className="star-container"
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starValue)}
            >
              {starValue <= rating ? (
                <StarIcon className="star-icon" style={{ color: 'gold' }} />
              ) : (
                <StarBorderIcon className="star-icon" style={{ color: 'gold' }} />
              )}
            </div>
          );
        })}
       </div>
       <img src={emojiImage} alt="Emoji" className="emoji" /> 
    </div>
  );
};

export default StarRating;