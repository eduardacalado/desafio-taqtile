import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${themeStyled.colors.lightGray};
  padding: 0 ${themeStyled.size.m6};
  align-items: center;
  justify-content: center;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    padding: 0 100px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const FloatButton = styled.button`
  height: 60px;
  width: 60px;
  bottom: 20px;
  right: 30px;
  border: 0;
  border-radius: 50%;
  z-index: 1;
  position: fixed;
  background-color: ${themeStyled.colors.primary[600]};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    height: 80px;
    width: 80px;
    bottom: 40px;
    right: 100px;
  }
`;
