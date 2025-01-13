import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TextProps {
  tag?: keyof JSX.IntrinsicElements;
  size?: number;
  color?: string;
  weight?: string;
  margin?: string;
  children: ReactNode;
}

const StyledText = styled.div<TextProps>`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color || '#333333'};
  ${({ margin }) => margin && `margin: ${margin}px`};
`;

export const Text: React.FC<TextProps> = ({ tag = 'p', children, ...props }) => {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
};
