import { proxy } from "valtio";

//defines the answer to a survey question asking if the entity in question is a school or a student
export interface StudentSchoolSurveyAnswer {
  answer: "school" | "student" | "";
}

//represents the state of the response to a survey question asking if the entity in question is a school or a student
export const StudentSchoolSurveyInstance = proxy({
  instance: { answer: "" } as StudentSchoolSurveyAnswer,
});

//represents the state of an Authentication Token in the application.(the current token or if its unavailable)
export const AuthenticationToken = proxy({
  token: "" as string | null | undefined,
});

//represents the state of the application's sidebar i.e if it is showing the pages section
export const SidebarState = proxy({
  showPagesSection: false,
});

//represents the state of the application's SideDrawer i.e if it is open or not
export const SideDrawerState = proxy({
  show: false,
});

export interface FilterParameters {
  industry: string;
  educationLevel: string;
  experience: number | "";
}

export const FilterInstance = proxy({
  instance: {
    industry: "",
    educationLevel: "",
    experience: "",
  } as FilterParameters,
});
