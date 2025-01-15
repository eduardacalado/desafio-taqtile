import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ size: string; color: string }>`
  ${({ color, size }) => `
width: ${size}px;
height: ${size}px;
border: 5px solid ${color};
  `}
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;
