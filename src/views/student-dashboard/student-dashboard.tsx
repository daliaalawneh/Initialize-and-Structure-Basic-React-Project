import { useContext } from "react";
import { ExamContext } from "../../context/ExamContext.tsx";

const StudentDashboard = () => {
    const { examType } = useContext(ExamContext);
    return (
        <div>
            <h2>{examType}</h2>
        </div>
    )
}

export default StudentDashboard;
