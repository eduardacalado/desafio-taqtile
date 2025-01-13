import { customThemeStyled } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

export type ThemeContextDataProps = {
  children?: React.ReactNode;
};

export const StyledThemeProvider = (props: ThemeContextDataProps): JSX.Element => {
  return (
    <ThemeProvider theme={customThemeStyled()}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};
