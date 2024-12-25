export interface ListItemProps {
  children?: string | undefined;
  active?: boolean;
  onClick?: any;
}

export default function OptionsListItem(props: ListItemProps) {
  return (
    <div className="">
      <button className="w-full hover:bg-purple-900" onClick={props.onClick}>
        {props.active ? (
          <div
            className="text-md font-medium pl-8 bg-purple-700 py-2 text-white"
            style={{ fontFamily: "Inter" }}
          >
            {props.children}
          </div>
        ) : (
          <div
            className="text-md font-medium pl-8 py-2 text-white"
            style={{ fontFamily: "Inter" }}
          >
            {props.children}
          </div>
        )}
      </button>
    </div>
  );
}
