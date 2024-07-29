import React, { useState } from 'react';
import Navbar from '../../component/NavBar'; // 네비게이션 바 컴포넌트 임포트
import Header from '../../component/Header';
import './styles.css';

const Login = ({ login }) => {
    const handleLogin = async () => {
        try {
          // 구글 로그인 API 호출
          const response = await axios.get('/api/auth/google'); // 실제 API 엔드포인트로 변경
          console.log(response.data);
          // 로그인 성공 후 처리
        } catch (error) {
          console.error('로그인 오류:', error);
        }
      };
    
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <GoogleLogoCircle />
          <GoogleLoginButton onClick={handleLogin} />
        </div>
      );
};

export default Login;







