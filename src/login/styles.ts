import styled from 'styled-components';
import { Text } from '../components/Text';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.m1};
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.size.m4};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export const WelcomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding-right: ${({ theme }) => theme.size.m4};
  }
`;

export const WelcomeTitle = styled(Text).attrs({
  size: 28,
  tag: 'h1',
  weight: '500',
})`
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: ${({ theme }) => theme.size.m10};
  }
`;

export const InstaqTitle = styled.img`
  width: 96px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 206px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex: 1;
  }
`;

export const InputsButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
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
  color: ${({ theme }) => theme.colors.dark['900']};
  padding-bottom: ${({ theme }) => theme.size.m1};
`;

export const TextInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.size.m10};
  align-items: center;
  border-radius: ${({ theme }) => theme.size.m1};
  border: 2px solid ${({ theme }) => theme.colors.primary['700']};
  margin-bottom: ${({ theme }) => theme.size.m4};
  font-size: ${({ theme }) => theme.size.m5};
  padding: ${({ theme }) => theme.size.base};
`;

export const ErrorMessage = styled(Text).attrs({
  size: 20,
  tag: 'p',
  weight: '400',
})`
  color: ${({ theme }) => theme.colors.red['700']};
`;

export const LoginButton = styled.button`
  width: 100%;
  height: ${({ theme }) => theme.size.m10};
  background-color: ${({ theme }) => theme.colors.primary['800']};
  border-radius: ${({ theme }) => theme.size.m1};
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.size.m8};

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
