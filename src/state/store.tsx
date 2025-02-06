import { proxy } from "valtio";

export interface StudentSchoolSurveyAnswer {
  answer: "school" | "student" | "";
}

export interface SchoolSignup {
  name: string;
  phoneNumber: string;
  password: string;
}



export interface ForgotStudentPassword {
  schoolid: number;
  registrationNumber: string;
  phoneNumber: string;
  otp: string;
  newpassword: string;
}

export const StudentSchoolSurveyInstance = proxy({
  instance: { answer: "" } as StudentSchoolSurveyAnswer,
});

export const SchoolSignupInstance = proxy({
  instance: { name: "", phoneNumber: "", password: "" } as SchoolSignup,
});



export const ForgotStudentPasswordInstance = proxy({
  instance: {
    schoolid: 0,
    registrationNumber: "",
    phoneNumber: "",
    otp: "",
    newpassword: "",
  } as ForgotStudentPassword,
});

export const AuthenticationToken = proxy({
  token: "" as string | null | undefined,
});

export const SchoolPasswordResetValue = proxy({
  password: "" as string,
});

export const SidebarState = proxy({
  showPagesSection: false,
});

export const SideDrawerState = proxy({
  show: false,
});
