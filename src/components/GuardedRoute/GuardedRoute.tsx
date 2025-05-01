import React, { ReactNode } from 'react';
import { UserRole } from '../../router';
import { useLocation } from 'react-router';

interface GuardedRouteProps {
  role: UserRole;
  children: ReactNode;
}

const GuardedRoute: React.FC<GuardedRouteProps> = ({ role, children }) => {
  const location = useLocation()
  const [, route] = location.pathname.split('/')
  if (route.includes(role)) {
    return children
  }
  return <>Un Authorized</>;
};

export default GuardedRoute;