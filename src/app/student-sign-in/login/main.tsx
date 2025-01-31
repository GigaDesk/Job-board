import Question from "@/components/question/question";
import Detail from "./detail";
import SchoolBadge from "./school-badge";

export default function Main() {
  return (
    <div className="grid content-center justify-items-center gap-4">
      <Question question="Sign in to your student account" />
      <SchoolBadge />
      <Detail />
    </div>
  );
}