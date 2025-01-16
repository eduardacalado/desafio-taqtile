import { Bounce, ToastContainer } from 'react-toastify';
import { StyledThemeProvider } from './theme/ThemeProvider';
import { AppRoutes } from './routes';

export function App() {
  return (
    <StyledThemeProvider>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
      <AppRoutes />
    </StyledThemeProvider>
  );
}
