import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { studentList } from "../../constants/indes";
import { useContext } from "react";
import { ExamContext } from "../../context/ExamContext.tsx";

const StudentDashboard = () => {
    const {examType} = useContext(ExamContext);
    return (
        <div>
            <Menu list={studentList} />
            <h1>Student Dashboard</h1>
            <h2>{examType}</h2>
            <Outlet />
        </div>
    )
}

export default StudentDashboard;
