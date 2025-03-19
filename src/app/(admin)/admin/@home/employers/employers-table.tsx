"use client";

import StudentList from "../../studentlist";
import StudentListItem from "../../studentlistitem";
import { gql } from "../../../../../__generated__/gql";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_EMPLOYERS_QUERY = gql(`
  query getEmployersProfile{
    getEmployersProfile{
      id
      name
      phone_number
    }
  }
  `);

export default function EmployersTable() {
  const { data, refetch } = useQuery(GET_EMPLOYERS_QUERY);

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Employers
      </div>
      <div className="rounded-b-xl grid  grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Name </div>
          <div className="">Contact </div>
          <div className="">Industry </div>
        </div>
        <StudentList>
          {data?.getEmployersProfile?.map((employer) => (
            <div className="grid" key={employer.id}>
              <StudentListItem
                key={employer?.id}
                name={employer?.name}
                registration_number={employer?.phone_number}
                phone_number={""}
              />
            </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
