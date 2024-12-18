import NextButton from "../components/button/nextbutton";
import StudentSchoolSurvey from "@/components/question/studentschoolsurvey";

export default function Main() {
  return (
    <div className="grid content-center justify-items-center grid-rows-2 gap-8">
      <StudentSchoolSurvey />
      <NextButton />
    </div>
  );
}
