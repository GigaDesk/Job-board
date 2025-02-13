import { proxy } from "valtio";

export interface StudentSchoolSurveyAnswer {
  answer: "school" | "student" | "";
}

export const StudentSchoolSurveyInstance = proxy({
  instance: { answer: "" } as StudentSchoolSurveyAnswer,
});

export const AuthenticationToken = proxy({
  token: "" as string | null | undefined,
});

export const SidebarState = proxy({
  showPagesSection: false,
});

export const SideDrawerState = proxy({
  show: false,
});
