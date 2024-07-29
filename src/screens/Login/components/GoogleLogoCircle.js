// GoogleLogoCircle.js
import React from 'react';
import './GoogleLogoCircle.css';
import googleLogo from './google-logo.png'; // 구글 로고 이미지 파일

const GoogleLogoCircle = () => {
  return (
    <div className="google-logo-circle">
      <img src={googleLogo} alt="Google Logo" className="google-logo-image" />
    </div>
  );
};

export default GoogleLogoCircle;
