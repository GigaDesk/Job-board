"use client";

import StudentList from "../../studentlist";
import { gql } from "../../../../../__generated__/gql";
import { useQuery } from "@apollo/client";
import StudentListItem from "../../studentlistitem";

const GET_UNAPPROVED_JOBS_QUERY = gql(`
query getUnapprovedJobs{
  getUnapprovedJobs{
    id
    title
    industry
    description
  }
}
`);

export default function UnapprovedJobsTable() {
  const { data } = useQuery(GET_UNAPPROVED_JOBS_QUERY);
  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Unapproved Jobs
      </div>
      <div className="rounded-b-xl grid  grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Title </div>
          <div className="">Industry </div>
          <div className="">Description </div>
        </div>
        <StudentList>
          {data?.getUnapprovedJobs?.map((unapprovedjob) => (
            <StudentListItem
              key={unapprovedjob?.id}
              name={unapprovedjob?.title}
              registration_number={unapprovedjob?.industry}
              phone_number={unapprovedjob?.description}
            />
          ))}
        </StudentList>
      </div>
    </div>
  );
}