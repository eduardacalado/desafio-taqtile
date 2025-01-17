import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Login } from '../pages/login';
import { UsersList } from '../pages/users-list';
import { useEffect } from 'react';
import { AddUser } from '../pages/add-user';
import { UserDetail } from '../pages/detail-screen';

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
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/user-detail/:id' element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
