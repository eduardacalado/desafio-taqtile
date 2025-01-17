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

export const InputsButtonContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-top: 60px;

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
  size: 20,
  tag: 'p',
})`
  color: ${themeStyled.colors.dark['900']};
  padding-bottom: ${themeStyled.size.m1};
`;

export const TextInput = styled.input`
  width: 100%;
  height: ${themeStyled.size.m10};
  align-items: center;
  border-radius: ${themeStyled.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${themeStyled.size.m4};
  font-size: ${themeStyled.size.m5};
  padding: ${themeStyled.size.base};
`;

export const ErrorMessage = styled(Text).attrs({
  size: 20,
  tag: 'p',
  weight: '400',
})`
  color: ${themeStyled.colors.red['700']};
`;

export const DateInput = styled.input`
  width: 100%;
  height: ${themeStyled.size.m10};
  align-items: center;
  border-radius: ${themeStyled.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${themeStyled.size.m4};
  font-size: ${themeStyled.size.m5};
  padding: ${themeStyled.size.base};
`;

export const RoleSelect = styled.select`
  width: 100%;
  height: ${themeStyled.size.m10};
  align-items: center;
  border-radius: ${themeStyled.size.m1};
  border: 2px solid ${themeStyled.colors.primary['700']};
  margin-bottom: ${themeStyled.size.m4};
  font-size: ${themeStyled.size.m5};
  padding: ${themeStyled.size.base};
`;
