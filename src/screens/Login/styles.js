import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

export const Logo = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c63ff;
`;

export const GoogleLogo = styled.div`
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 30px;
        height: 30px;
    }
`;


export const LoginButton = styled.button`
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    :hover{
        background-color: darkviolet;
    }
`;