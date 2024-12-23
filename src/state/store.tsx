import { proxy } from "valtio";

export interface StudentSchoolSurveyAnswer {
    answer: "school" | "student" | ""
}

export interface SchoolSignup {
    name: string,
    phoneNumber: string,
    password: string
}

export const StudentSchoolSurveyInstance = proxy({
    instance: { answer: "" } as StudentSchoolSurveyAnswer,
});

export const SchoolSignupInstance = proxy({
    instance: { name: "", phoneNumber: "", password: ""  } as SchoolSignup,
});

export const AuthenticationToken = proxy({
    token: "" as string | null | undefined
})

export const SchoolPasswordResetValue= proxy({
    password: "" as string
})