import { proxy } from "valtio";

export interface StudentSignIn {
  schoolid: number;
}

export interface ForgotStudentPassword {
  schoolid: number;
  registrationNumber: string;
  phoneNumber: string;
  otp: string;
  newpassword: string;
}



export const StudentSignInInstance = proxy({
  instance: { schoolid: 0 } as StudentSignIn,
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