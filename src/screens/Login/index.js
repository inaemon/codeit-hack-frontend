import React, { useState } from 'react';
import axios from 'axios';
import './styles.js';
import { Container, LoginButton, Logo, GoogleLogo } from './styles.js';
import googleLogo from './components/google-logo.png'; 

const Login = ({ login }) => {
    const handleLogin = async () => {
        try {
          // 구글 로그인 API 호출
          const response = await axios.get('/localhost:5000/auth/google'); // 실제 API 엔드포인트로 변경
          console.log(response.data);
          // 로그인 성공 후 처리
        } catch (error) {
          console.error('로그인 오류:', error);
        }
      };
    
      return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
          <Logo>TripGoing</Logo>
          <GoogleLogo>
            <img src={googleLogo} alt="Google Logo" className="google-logo-image" />
          </GoogleLogo>
          <LoginButton onClick={handleLogin}>
            구글로 로그인하기
          </LoginButton>
        </Container>
      );
};

export default Login;







