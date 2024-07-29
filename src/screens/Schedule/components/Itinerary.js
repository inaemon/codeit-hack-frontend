import React from 'react';
import ItineraryItem from './ItineraryItem';
import './Itinerary.css';

const Itinerary = ({ date, items }) => {
  return (
    <div className="itinerary">
      <div className="itinerary-date">
        <div className="date-circle">
          {date.split('.')[1]}.{date.split('.')[2]}
        </div>
        <h2>{date}</h2>
      </div>
      {items.map((item, index) => (
        <ItineraryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Itinerary;
