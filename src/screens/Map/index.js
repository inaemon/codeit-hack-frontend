import React, { useState } from 'react';
import Navbar from '../../component/NavBar'; // 네비게이션 바 컴포넌트 임포트
import Header from '../../component/Header';
import './styles.css';

function Map() {

    return (
        <div className='container'>  
            <Header/>
            <h1>Map</h1>
            <Navbar /> {/* 네비게이션 바 추가 */}
        </div>
    );
}

export default Map;







