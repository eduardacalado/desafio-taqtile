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
  gap: ${({ theme }) => theme.size.m1};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${themeStyled.size.m4};

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
    padding-left: ${({ theme }) => theme.size.m4};
  }
`;

export const WelcomeTitle = styled(Text).attrs({
  size: 28,
  tag: 'h1',
  weight: '500',
})`
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.size.m9};
  }
`;

export const InstaqTitle = styled.img`
  width: 96px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 206px;
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
  width: 320px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 384px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.size.m1};
`;

export const InputLabel = styled(Text).attrs({
  size: 20,
  tag: 'p',
})`
  color: #1d1d1d;
  padding-bottom: ${({ theme }) => theme.size.m1};
`;

export const TextInput = styled.input`
  width: 100%;
  height: 48px;
  align-items: center;
  border-radius: ${({ theme }) => theme.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${({ theme }) => theme.size.m4};
  font-size: 18px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 24rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${themeStyled.colors.primary['800']};
  border-radius: ${({ theme }) => theme.size.m1};
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  &:active {
    opacity: 0.8;
  }
`;

export const LoginButtonText = styled(Text).attrs({
  size: 20,
  tag: 'p',
  weight: '600',
})`
  color: ${({ theme }) => theme.colors.white};
`;
