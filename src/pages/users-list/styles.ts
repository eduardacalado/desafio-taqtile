import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${themeStyled.colors.lightGray};
  padding: 0 20px;

  align-items: center;
  justify-content: center;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    padding: 0 100px;
  }
`;

export const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: gray;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr {
      background: ${themeStyled.colors.white};
      border-radius: 10px;
      box-shadow: 0 0 0 2px ${themeStyled.colors.primary[700]};
    }

    td {
      padding: 18px 16px;
      color: ${themeStyled.colors.dark[700]};

      &:first-child {
        color: ${themeStyled.colors.primary[700]};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
