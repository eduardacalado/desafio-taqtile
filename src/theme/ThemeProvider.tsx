import { themeStyled } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

type ThemeContextDataProps = {
  children?: React.ReactNode;
};

export const StyledThemeProvider = (props: ThemeContextDataProps): JSX.Element => {
  return (
    <ThemeProvider theme={themeStyled}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};
