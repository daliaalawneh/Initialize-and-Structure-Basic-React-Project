import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout/AppLayout"
import RootDashboard from "../views/root-dashboard/root-dashboard"
import StudentDashboard from "../views/student-dashboard/student-dashboard"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index path="root" element={<RootDashboard />} />
        <Route path="student" element={<StudentDashboard />} />
      </Route>
    </Routes>
  )
}

export default Router
