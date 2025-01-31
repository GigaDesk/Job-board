import CompanyStatement from "@/components/splash/companystatement";
import Main from "./main";
import Question from "@/components/question/question";

export default function StudentSignIn() {
  return (
    <div
      className="h-screen grid content-center bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <Question question="Which is your school?" />
      <Main />
      <footer className="absolute bottom-0 w-full pb-4">
        <CompanyStatement />
      </footer>
    </div>
  );
}
