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

export const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0 ${themeStyled.size.m4};

    th {
      color: gray;
      font-weight: 400;
      padding: ${themeStyled.size.m4} ${themeStyled.size.m8};
      text-align: left;
      line-height: ${themeStyled.size.m7};
    }

    tr {
      background: ${themeStyled.colors.white};
      border-radius: ${themeStyled.size.m1};
      box-shadow: 0 0 0 2px ${themeStyled.colors.primary[700]};
    }

    td {
      padding: ${themeStyled.size.m5} ${themeStyled.size.m4};
      color: ${themeStyled.colors.dark[700]};

      &:first-child {
        color: ${themeStyled.colors.primary[700]};
        border-top-left-radius: ${themeStyled.size.m1};
        border-bottom-left-radius: ${themeStyled.size.m1};
      }

      &:last-child {
        border-top-right-radius: ${themeStyled.size.m1};
        border-bottom-right-radius: ${themeStyled.size.m1};
      }
    }
  }
`;
