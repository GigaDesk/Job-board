"use client";

import StudentList from "./studentlist";
import StudentListItem from "./studentlistitem";
import PopupButton from "@/components/button/popup-button";
import AddStudent from "./add-student";
import AddStudentPopup from "./add-student-popup";
import { gql } from "../../__generated__/gql";
import { useQuery } from "@apollo/client";

const GET_SCHOOL_STUDENTS_QUERY = gql(`
  query SchoolStudents{
     getSchoolProfile{
      students{
        id
        name
        registration_number
        phone_number
      }
    }
  }
`);

export default function StudentTable() {
  const { loading, data, error } = useQuery(GET_SCHOOL_STUDENTS_QUERY);
  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Students
        <PopupButton
          button={<AddStudent />}
          popupElement={<AddStudentPopup />}
          popupPlacement="bottom-end"
        />
      </div>
      <div className="rounded-b-xl grid  grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Name </div>
          <div className=""> Registration Number</div>
          <div className="max-md:hidden">Phone Number</div>
        </div>
        <StudentList>
          {data?.getSchoolProfile?.students?.map((student) => (
            <StudentListItem
              key={student?.id}
              name={student?.name}
              registration_number={student?.registration_number}
              phone_number={student?.phone_number}
            />
          ))}
        </StudentList>
      </div>
    </div>
  );
}
