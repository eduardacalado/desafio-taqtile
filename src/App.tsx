import { Login } from './login';
import { StyledThemeProvider } from './theme/ThemeProvider';

export function App() {
  return (
    <StyledThemeProvider>
      <Login />
    </StyledThemeProvider>
  );
}
