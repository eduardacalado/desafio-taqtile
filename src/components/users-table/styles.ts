import styled from 'styled-components';
import { themeStyled } from '../../theme/theme';
import { Text } from '../Text';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 ${themeStyled.size.m4};
`;

export const TableHeaderRow = styled.tr`
  background-color: transparent;
`;

export const TableHeaderCell = styled.th`
  color: gray;
  font-weight: 400;
  padding: ${themeStyled.size.m4} ${themeStyled.size.m8};
  text-align: left;
  line-height: ${themeStyled.size.m7};
`;

export const TableRow = styled.tr`
  background: ${themeStyled.colors.white};
  border-radius: ${themeStyled.size.m1};
  box-shadow: 0 0 0 2px ${themeStyled.colors.primary[700]};
`;

export const TableDataEmail = styled.td`
  padding: ${themeStyled.size.m5} ${themeStyled.size.m4};
  color: ${themeStyled.colors.dark[700]};
  border-top-right-radius: ${themeStyled.size.m1};
  border-bottom-right-radius: ${themeStyled.size.m1};
`;

export const TableDataName = styled.td`
  padding: ${themeStyled.size.m5} ${themeStyled.size.m4};
  color: ${themeStyled.colors.primary[700]};
  border-top-left-radius: ${themeStyled.size.m1};
  border-bottom-left-radius: ${themeStyled.size.m1};
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const PageNumberText = styled(Text).attrs({
  size: '28px',
  tag: 'p',
})`
  color: ${themeStyled.colors.dark['900']};
`;
