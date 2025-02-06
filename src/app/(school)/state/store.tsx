import { proxy } from "valtio";

export interface SchoolSignup {
    name: string;
    phoneNumber: string;
    password: string;
  }

  export interface ForgotSchoolPassword {
    phoneNumber: string;
    otp: string;
    newpassword: string;
  }
  
  export const ForgotSchoolPasswordInstance = proxy({
    instance: { phoneNumber: "", otp: "", newpassword: "" } as ForgotSchoolPassword,
  });

  export const SchoolSignupInstance = proxy({
    instance: { name: "", phoneNumber: "", password: "" } as SchoolSignup,
  });