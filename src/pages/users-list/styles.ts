import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
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
  margin-bottom: 100px;
  width: 100%;
`;
