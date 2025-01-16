import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';
import { Text } from '../Text';

export const LoginButton = styled.button<{ size?: number }>`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${themeStyled.size.m10};
  background-color: ${({ disabled }) => (disabled ? 'gray' : themeStyled.colors.primary['800'])};
  border-radius: ${themeStyled.size.m1};
  border: none;
  justify-content: center;
  align-items: center;
  margin-top: ${themeStyled.size.m8};

  &:active {
    opacity: 0.8;
  }
`;

export const LoginButtonText = styled(Text).attrs({
  size: 20,
  tag: 'p',
  weight: '600',
})`
  color: ${themeStyled.colors.white};
`;
