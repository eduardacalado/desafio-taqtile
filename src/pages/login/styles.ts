import styled from 'styled-components';
import { Text } from '../../components/Text';
import { themeStyled } from '../../theme/theme';

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${themeStyled.size.m1};
  padding: 0 20px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${themeStyled.size.m4};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export const WelcomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${themeStyled.breakpoints.sm}px) {
    padding-right: ${themeStyled.size.m4};
  }
`;

export const WelcomeTitle = styled(Text).attrs({
  size: '28px',
  tag: 'h1',
  weight: '500',
})`
  color: ${themeStyled.colors.black};

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    font-size: ${themeStyled.size.m10};
  }
`;

export const InstaqTitle = styled.img`
  width: 96px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 206px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    flex: 1;
  }
`;

export const InputsButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;

  @media (min-width: ${themeStyled.breakpoints.md}px) {
    width: 384px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${themeStyled.size.m1};
`;

export const InputLabel = styled(Text).attrs({
  size: '20px',
  tag: 'p',
})`
  color: ${themeStyled.colors.dark['900']};
  padding-bottom: ${themeStyled.size.m1};
`;

export const ErrorMessage = styled(Text).attrs({
  size: '20px',
  tag: 'p',
  weight: '400',
})`
  color: ${themeStyled.colors.red['700']};
`;
