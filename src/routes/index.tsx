import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Login } from '../pages/login';
import { UsersList } from '../pages/users-list';
import { useEffect } from 'react';

function ProtectedRoute() {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return <></>;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ProtectedRoute />
      <Routes>
        <Route path='/' element={<Navigate to='/users' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}
