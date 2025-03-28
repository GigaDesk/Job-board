"use client";

import StudentList from "../../studentlist";
import StudentListItem from "../../studentlistitem";
import { useRouter } from "next/navigation";

export default function ApplicationsTable() {
  const router = useRouter();

  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Job Applications
      </div>
      <div className="rounded-b-xl grid grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Title </div>
          <div className=""> Company </div>
          <div className="max-md:hidden">Status </div>
        </div>
        <StudentList>
          <div className="grid">
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push(`/employee/applications`);
              }}
            >
              <StudentListItem
                name={"Machine Learning Engineer"}
                registration_number={"Safaricom"}
                phone_number={"Pending"}
              />
            </div>
          </div>
        </StudentList>
      </div>
    </div>
  );
}
