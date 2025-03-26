"use client";

import StudentList from "../../studentlist";
import { gql } from "../../../../../__generated__/gql";
import { useQuery } from "@apollo/client";
import StudentListItem from "../../studentlistitem";
import { useEffect } from "react";

const GET_EMPLOYER_UNAPPROVED_JOBS_QUERY = gql(`
query getEmployerProfile2{
  getEmployerProfile{
    unapprovedJobs{
      id
      title
      level
      deadline
    }
  }
}
`);

export default function UnapprovedJobsTable() {

  const { data, refetch } = useQuery(GET_EMPLOYER_UNAPPROVED_JOBS_QUERY, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Unapproved Jobs
      </div>
      <div className="rounded-b-xl grid grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Title </div>
          <div className="">Level </div>
          <div className="max-md:hidden">Deadline </div>
        </div>
        <StudentList>
          {data?.getEmployerProfile?.unapprovedJobs?.map((unapprovedjob) => (
            <div className="grid" key={unapprovedjob?.id}>
              <div className="cursor-pointer">
                <StudentListItem
                  name={unapprovedjob?.title}
                  registration_number={unapprovedjob?.level}
                  phone_number={unapprovedjob?.deadline}
                />
              </div>
            </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
