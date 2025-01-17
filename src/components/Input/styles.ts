import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';

export const Input = styled.input<{ size?: string }>`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${themeStyled.size.m10};
  align-items: center;
  border-radius: ${themeStyled.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${themeStyled.size.m4};
  font-size: ${themeStyled.size.m5};
  padding: ${themeStyled.size.base};
`;
