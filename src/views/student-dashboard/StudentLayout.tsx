import { Outlet } from "react-router"
import Menu from "../../components/Menu/Menu"
import { studentList } from "../../constants/indes"

const StudentLayout = () => {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Menu list={studentList} />
      <Outlet />
    </div>
  )
}

export default StudentLayout
