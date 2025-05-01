import { Navigate, Outlet } from "react-router";
import { UserRole } from "../../router";

export default function AppLayout({ userRole }: { userRole: UserRole }) {
  return (
    <div>
      {userRole === UserRole.student ? <Navigate to='/student' /> : <Navigate to='/root' />}
      <Outlet />
    </div>
  )
}
