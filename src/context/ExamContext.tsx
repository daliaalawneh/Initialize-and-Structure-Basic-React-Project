import { createContext } from "react";

interface IUserValue{
    ExamType: string
}

export const ExamContext = createContext<IUserValue>({ExamType: ""});

export const ExamProvider = (props: { children: React.ReactNode }) =>{

    const data = {ExamType: "UML"};

    return <ExamContext.Provider value={data}>{props.children}</ExamContext.Provider>
}