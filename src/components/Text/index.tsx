import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = {
  tag?: keyof JSX.IntrinsicElements;
  size?: number;
  color?: string;
  weight?: string;
  margin?: string;
  children: ReactNode;
};

const StyledText = styled.div<TextProps>`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => color || '#333333'};
  ${({ margin }) => margin && `margin: ${margin}px`};
`;

export const Text: React.FC<TextProps> = ({ children, tag, ...props }) => {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
};
