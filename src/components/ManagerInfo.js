import React from 'react';
import '../App.css'; 
import StarIcon from '@mui/icons-material/Star';
import manager from '../images/manager.png'; 

const ManagerInfo = () => {
  return (
    <div className="manager-info">
      <div className="manager-details">
        <img src={manager} alt="Manager" className="manager-image" />
        <div className="manager-info-text">
          <h3 className="manager-name">Shivansh</h3>
          <p className="manager-designation">Manager</p>
          <p className="manager-quote">"I'm happy to work here"</p>
        </div>
        </div>
        <div className="star-rating">
  <div className="rating-container">
    <p className="rating">4.5</p>
    <StarIcon className="Star" />
  </div>
  <p className="reviews">350 Reviews</p>
</div>
    </div>
  );
};

export default ManagerInfo;
