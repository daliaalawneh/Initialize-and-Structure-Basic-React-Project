import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { studentList } from "../../constants/indes";

const StudentDashboard = () => {

    return (
        <div>
            <Menu list={studentList} />
            <h1>Student Dashboard</h1>
            <Outlet />
        </div>
    )
}

export default StudentDashboard;
