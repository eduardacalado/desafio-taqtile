import styled from 'styled-components';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const WelcomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #1d1d1d;
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
  gap: 6px;
`;

export const InputLabel = styled.label`
  color: #1d1d1d;
`;

export const InputArea = styled.input`
  width: 18rem;
  height: 2rem;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #01d5ad;
`;

export const LoginButton = styled.button`
  width: 18rem;
  height: 3rem;
  background-color: #0a6c53;
  border-radius: 10px;
  border: none;
  justify-content: center;
  align-items: center;

  &:active {
    opacity: 0.8;
  }
`;

export const LoginButtonText = styled.p`
  font-size: medium;
  font-weight: bold;
  background-color: transparent;
  color: white;
`;
