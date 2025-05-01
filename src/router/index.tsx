import { Route, Routes } from "react-router"
import AppLayout from "../components/AppLayout/AppLayout"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index path="root" element={<>Root</>} />
        <Route path="student" element={<>student</>} />
      </Route>
    </Routes>
  )
}

export default Router
