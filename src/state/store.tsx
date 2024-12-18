import { proxy } from "valtio";

export interface StudentSchoolSurveyAnswer {
    answer: "school" | "student" | ""
}

export const StudentSchoolSurveyInstance = proxy({
    instance: { answer: "" } as StudentSchoolSurveyAnswer,
});