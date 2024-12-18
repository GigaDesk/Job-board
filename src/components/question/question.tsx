export default function Question(props: { question: string }) {
  return (
    <div className="grid justify-items-center text-center text-gray font-medium text-2xl max-md:px-12 md:text-4xl">
      <h2>{props.question}</h2>
    </div>
  );
}
