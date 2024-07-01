import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectRouter = ({ element, ...rest }) => {
  const { state } = useAuth();

  return state.isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectRouter;
