import React, { ReactNode } from 'react';
import { UserRole } from '../../router';
import { Navigate, useLocation } from 'react-router';

interface GuardedRouteProps {
  role: UserRole | null;
  children: ReactNode;
}

const GuardedRoute: React.FC<GuardedRouteProps> = ({ role, children }) => {
  if(!role) return <Navigate to={'/unauthenticated'} replace />;
  const location = useLocation()
  if (location.pathname === '/' || location.pathname.startsWith(`/${role}`)) {
    return children
  }
  return <>Un Authorized</>;
};

export default GuardedRoute;