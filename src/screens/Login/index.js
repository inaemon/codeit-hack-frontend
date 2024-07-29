import React, { useState } from 'react';
import Navbar from '../../component/NavBar'; // 네비게이션 바 컴포넌트 임포트
import Header from '../../component/Header';
import './styles.css';

const Login = ({ login }) => {
    const handleLogin = () => {
        login(); // 로그인 처리
    };

    return (
        <div className='container'>  
            <Header/>
            <h1>로그인 화면</h1>
            <button onClick={handleLogin}>로그인</button>
            <Navbar/>
        </ div>
    );
};

export default Login;







