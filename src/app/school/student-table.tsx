import AddIcon from "@mui/icons-material/Add";
import StudentList from "./studentlist";

export default function StudentTable() {
  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-4 flex justify-between items-center text-text-table-gray">
        Students
        <AddIcon />
      </div>
      <div className="rounded-b-xl grid grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-3 px-4 pr-6 items-center text-text-table-gray">
          <div className="">Name </div>
          <div className=""> Registration Number</div>
          <div className="">Date of Birth</div>
        </div>
        <StudentList />
      </div>
    </div>
  );
}
