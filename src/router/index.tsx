import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout/AppLayout"
import RootDashboard from "../views/root-dashboard/root-dashboard"
import Orders from "../views/student-dashboard/views/order/order.tsx"
import { ExamProvider } from "../context/ExamContext.tsx"
import StudentLayout from "../views/student-dashboard/StudentLayout.tsx"
import StudentDashboard from "../views/student-dashboard/student-dashboard.tsx"
import RootLayout from "../views/root-dashboard/RootLayout.tsx"
import GuardedRoute from "../components/GuardedRoute/GuardedRoute.tsx"

export enum UserRole {
  student = "student",
  root = "root"
}
export type UserRoleType = {
  type: UserRole
}
const Router = () => {
  const userRole: UserRoleType = { type: UserRole.root };
  return (
    <Routes>
      <Route path="/" element={
        <GuardedRoute role={userRole.type}>
          <AppLayout />
        </GuardedRoute>} >
        <Route path="root" element={<RootLayout />}>
          <Route index element={<RootDashboard />} />
        </Route>
        <Route path="student" element={
          <ExamProvider>
            <StudentLayout />
          </ExamProvider>
        }>
          <Route index element={<StudentDashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
