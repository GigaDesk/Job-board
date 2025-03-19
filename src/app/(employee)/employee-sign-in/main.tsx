import Question from "@/components/question/question";
import Detail from "./detail";

export default function Main() {
  return (
    <div className="grid content-center justify-items-center grid-rows-2 gap-8">
      <Question question="Sign in to your company's account" />
      <Detail />
    </div>
  );
}