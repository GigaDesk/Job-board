export interface StudentListProps {
  children?: React.ReactNode;
}

export default function StudentList(props: StudentListProps) {
  return (
    <div className="rounded-b-xl text-black overflow-auto h-[270px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
    {props.children}
    </div>
  );
}
