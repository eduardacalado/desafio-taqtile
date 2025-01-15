import styled from 'styled-components';
import { Text } from '../Text';

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
