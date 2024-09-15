import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectRouter = ({ element: Element, ...rest }) => {
  const { state } = useAuth();

  return state.isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectRouter;
  