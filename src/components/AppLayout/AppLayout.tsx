import { Navigate, Outlet, useLocation } from "react-router";
import { UserRole } from './../../router';

export default function AppLayout({ role }: { role: UserRole }) {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <Navigate to={role === UserRole.root ? "/root" : "/student"} replace />
    );
  }

  return <Outlet />;
}
