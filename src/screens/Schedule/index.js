import React from 'react';
import Itinerary from './components/Itinerary';
import Navbar from '../../component/NavBar';
import Header from '../../component/Header';
import './styles.css';

function App() {
  const itineraryData = [
    {
      date: '2024.8.30',
      items: [
        {
          title: '더 로얄 파크 호텔 후쿠오카',
          price: '226,319 / 박',
          type: '4성급',
          memo: ''
        },
        {
          title: '후쿠즈 가든 신선',
          price: '약 10000~15000',
          type: '카페',
          memo: ''
        },
        {
          title: '스미요시 신사',
          price: '입장료 무료',
          type: '신사',
          memo: '오후 5:00 영업 종료'
        }
      ]
    }
  ];

  return (
    <div className="App">
      <Header/>
      {itineraryData.map((data, index) => (
        <Itinerary key={index} date={data.date} items={data.items} />
      ))}
      <Navbar/>
    </div>
  );
}

export default App;
