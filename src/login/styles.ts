import styled from 'styled-components';
import { Text } from '../components/Text';
import { themeStyled } from '../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export const WelcomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${themeStyled.breakpoints.sm}px) {
    padding: 1rem;
  }
`;

export const WelcomeTitle = styled(Text).attrs({
  size: 28,
  tag: 'h1',
  weight: '500',
})`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ size }) => size};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    font-size: 50px;
  }
`;

export const InstaqTitle = styled.img`
  width: 6rem;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 13rem;
  }
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex: 1;
  }
`;

export const InputsButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 24rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputLabel = styled(Text).attrs({
  size: 20,
  tag: 'p',
})`
  color: #1d1d1d;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 3rem;
  align-items: center;
  border-radius: ${({ theme }) => theme.size.m1};
  border: 2px solid #01d5ad;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 24rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #0a6c53;
  border-radius: ${({ theme }) => theme.size.m1};
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

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
