import React from 'react';
import './ItineraryItem.css';

const ItineraryItem = ({ item }) => {
  const handleButtonClick = () => {
    console.log(`${item.title} 버튼 클릭됨`);
  };

  return (
    <div className={`itinerary-item ${item.type}`}>
      <button className="item-button" onClick={handleButtonClick}>
        편집
      </button>
      <div className="item-header">
        <span className="item-title">{item.title}</span>
  
      </div>
      <div className="item-footer">
        <span className="item-type">{item.type}</span> 
        <span className="item-price">{item.price}</span>
        {item.time && <span className="item-time">{item.time}</span>}
      </div>
      {item.memo && <div className="item-memo">{item.memo}</div>}
    </div>
  );
};

export default ItineraryItem;
