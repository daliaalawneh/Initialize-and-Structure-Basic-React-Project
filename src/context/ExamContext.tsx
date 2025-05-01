import { createContext } from "react";

interface IUserValue{
    examType: string
}

export const ExamContext = createContext<IUserValue>({examType: ""});

export const ExamProvider = (props: { children: React.ReactNode }) =>{
    const data = {examType: "UML"};

    return <ExamContext.Provider value={data}>{props.children}</ExamContext.Provider>
}