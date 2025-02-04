import { proxy } from "valtio";

export interface StudentSchoolSurveyAnswer {
    answer: "school" | "student" | ""
}

export interface SchoolSignup {
    name: string,
    phoneNumber: string,
    password: string
}

export interface StudentSignIn{
    schoolid: number;
}

export const StudentSchoolSurveyInstance = proxy({
    instance: { answer: "" } as StudentSchoolSurveyAnswer,
});

export const SchoolSignupInstance = proxy({
    instance: { name: "", phoneNumber: "", password: ""  } as SchoolSignup,
});

export const StudentSignInInstance = proxy({
    instance: {} as StudentSignIn,
});

export const AuthenticationToken = proxy({
    token: "" as string | null | undefined
})

export const SchoolPasswordResetValue= proxy({
    password: "" as string
})

export const SidebarState = proxy({
    showPagesSection: false
})

export const SideDrawerState = proxy({
    show: false
})