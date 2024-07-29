import React from 'react';
import ItineraryItem from './ItineraryItem';
import './Itinerary.css';

const Itinerary = ({ date, items, onAdd }) => {
  const handleAddClick = () => {
    // 새로운 항목을 추가하는 기본 구조
    const newItem = {
      title: '새로운 항목',
      price: '가격 미정',
      type: '기타',
      memo: ''
    };
    onAdd(newItem); // 부모 컴포넌트로부터 받은 onAdd 함수 호출
  };

  return (
    <div className="itinerary">
      <div className="itinerary-date">
        <div className="date-circle">
          {date.split('.')[2]}
        </div>
        <h2>{date}</h2>
      </div>
      {items.map((item, index) => (
        <ItineraryItem key={index} item={item} />
      ))}
      <button onClick={handleAddClick} className="add-item-button">
        항목 추가
      </button>
    </div>
  );
};

export default Itinerary;
