import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout/AppLayout"
import RootDashboard from "../views/root-dashboard/root-dashboard"
import Orders from "../views/student-dashboard/views/order/order.tsx"
import { ExamProvider } from "../context/ExamContext.tsx"
import StudentLayout from "../views/student-dashboard/StudentLayout.tsx"
import StudentDashboard from "../views/student-dashboard/student-dashboard.tsx"
import RootLayout from "../views/root-dashboard/RootLayout.tsx"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route path="root" element={<RootLayout />}>
          <Route path="" element={<RootDashboard />} />
        </Route>
        <Route path="student" element={
          <ExamProvider>
            <StudentLayout />
          </ExamProvider>
        }>
          <Route path="" element={<StudentDashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
