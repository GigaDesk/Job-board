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

export interface NewJob {
  title: string;
  description: string;
  industry: string;
  level: string;
  location: string;
  deadline: string | undefined;
  educationLevel: string;
  experience: number | "";
  minSalary: number | undefined;
  maxSalary: number | undefined;
  requirements: string[];
}

export const ForgotSchoolPasswordInstance = proxy({
  instance: {
    phoneNumber: "",
    otp: "",
    newpassword: "",
  } as ForgotSchoolPassword,
});

export const SchoolSignupInstance = proxy({
  instance: { name: "", phoneNumber: "", password: "" } as SchoolSignup,
});

export const JobInstance = proxy({
  instance: {
    title: "",
    description: "",
    industry: "",
    level: "",
    location: "",
    deadline: undefined,
    educationLevel: "",
    experience: "",
    minSalary: undefined,
    maxSalary: undefined,
    requirements:[""],
  } as NewJob,
});

export const ActiveRoute = proxy({
  instance: "Home"
});