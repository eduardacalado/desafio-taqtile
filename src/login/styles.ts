/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ScreenContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const WelcomeTitleContainer = styled.div`
    align-items: center;
    justify-content: center;
`;

export const WelcomeTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #1D1D1D;
`;

export const InstaqTitle = styled.img`
    width: 6rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputTitle = styled.p`
    color: #1D1D1D;
`;

export const InputArea = styled.input`
  width: 18rem;
  height: 2rem;
  align-items: center;
  border-radius: 10px;
  border-color: #01D5AD;
`;

export const LoginButton = styled.button`
    width: 18rem;
    height: 3rem;
    background-color: #0A6C53;
    border-radius: 10px;
    border: none;
    justify-content: center;
    align-items: center;

    &:active {
        opacity: 80%;
    }
`;

export const LoginButtonText = styled.p`
    font-size: medium;
    font-weight: bold;
    background-color: transparent;
    color: white;
`;