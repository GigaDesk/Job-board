import Question from "../components/question/question";
import SchoolStudentChoice from "./schoolstudentchoice";

export default function StudentSchoolSurvey() {
  return (
    <div className="grid content-center justify-items-center grid-rows-2 gap-8">
      <Question question="Which of the following best describes you?" />
      <SchoolStudentChoice />
    </div>
  );
}
