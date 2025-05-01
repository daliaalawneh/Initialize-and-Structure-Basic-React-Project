import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout/AppLayout"
import RootDashboard from "../views/root-dashboard/root-dashboard"
import StudentDashboard from "../views/student-dashboard/student-dashboard"
import Orders from "../views/student-dashboard/views/order/order.tsx"
import { ExamProvider } from "../context/ExamContext.tsx"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index path="root" element={<RootDashboard />} />
        <Route path="student" element={
          <ExamProvider>
            <StudentDashboard />
          </ExamProvider>
        }>
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
