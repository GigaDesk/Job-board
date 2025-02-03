export interface StudentListItemProps {
  name?: string;
  registration_number?: string;
  phone_number?: string;
}

export default function StudentListItem(props: StudentListItemProps) {
  return (
    <div className="px-2">
      <div className="px-2 border-b border-border-table-gray h-[30px] grid items-center">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="h-[20px] overflow-x-clip overflow-y-clip">
            {props.name}
          </div>
          <div className="h-[20px] overflow-x-clip overflow-y-clip">
            {props.registration_number}
          </div>
          <div className="max-md:hidden h-[20px] overflow-x-clip overflow-y-clip">
            {props.phone_number}
          </div>
        </div>
      </div>
    </div>
  );
}
