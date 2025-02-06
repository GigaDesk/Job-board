import { proxy } from "valtio";

export interface StudentSignIn {
  schoolid: number;
}

export const StudentSignInInstance = proxy({
  instance: { schoolid: 0 } as StudentSignIn,
});
