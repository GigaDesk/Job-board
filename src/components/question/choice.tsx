import Selector from "./Selector";

export default function Choice(props: {
  choice: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="grid grid-cols-2 justify-items-center  text-gray font-medium text-xl w-40">
      <Selector checked={props.checked} handleChange={props.handleChange} />
      <div className="grid content-center">
        <p>{props.choice}</p>
      </div>
    </div>
  );
}
