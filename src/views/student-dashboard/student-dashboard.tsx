import Menu from "../../components/AppLayout/Menu/Menu";
import { studentList } from "../../constants/indes";

const StudentDashboard = () => {

    return (
        <div>
            <Menu list={studentList} />
            <h1>Student Dashboard</h1>
        </div>
    )
}

export default StudentDashboard;
