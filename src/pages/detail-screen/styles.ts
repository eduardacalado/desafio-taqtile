import styled from 'styled-components';
import { Text } from '../../components/Text';
import { themeStyled } from '../../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: ${themeStyled.size.m1};
  padding: 0 20px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-top: 60px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 384px;
  }
`;

export const DetailandTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${themeStyled.size.m1};
`;

export const Detail = styled(Text).attrs({
  size: '20px',
  tag: 'p',
})`
  margin-left: ${themeStyled.size.base};
`;

export const DetailTitle = styled(Text).attrs({
  size: '20px',
  tag: 'p',
  weight: '500',
})`
  padding-bottom: ${themeStyled.size.m1};
`;

export const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${themeStyled.size.m10};
  align-items: center;
  border-radius: ${themeStyled.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${themeStyled.size.m4};
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled(Text).attrs({
  size: '20px',
  tag: 'p',
  weight: '400',
})`
  color: ${themeStyled.colors.red['700']};
`;
