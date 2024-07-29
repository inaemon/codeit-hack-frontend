// GoogleLoginButton.js
import React from 'react';
import './GoogleLoginButton.css';

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button className="google-login-button" onClick={onClick}>
      구글로 로그인하기
    </button>
  );
};

export default GoogleLoginButton;
