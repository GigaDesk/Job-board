import NextButton from "./nextbutton";
import StudentSchoolSurvey from "@/app/studentschoolsurvey";

export default function Main() {
  return (
    <div className="grid content-center justify-items-center grid-rows-2 gap-8">
      <StudentSchoolSurvey />
      <NextButton />
    </div>
  );
}
