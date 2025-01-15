import { Bounce, ToastContainer } from 'react-toastify';
import { Login } from './login';
import { StyledThemeProvider } from './theme/ThemeProvider';

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
      <Login />
    </StyledThemeProvider>
  );
}
