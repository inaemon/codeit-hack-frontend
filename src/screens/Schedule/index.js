// Schedule.js
import React from 'react';
import Navbar from '../../component/NavBar'; 
import Header from '../../component/Header';

const Schedule = () => {
    return (
        <div className='container'>  
            <Header/>
            <h1>일정</h1>
            <Navbar /> {/* 네비게이션 바 추가 */}
        </div>
    )
};

export default Schedule;