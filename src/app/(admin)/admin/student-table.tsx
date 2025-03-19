"use client";

import StudentList from "./studentlist";
import StudentListItem from "./studentlistitem";
import AddStudent from "./add-student";
import { gql } from "../../../__generated__/gql";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GET_JOBS_QUERY = gql(`
  query getJobs{
    getJobs{
      id
      title
      industry
      description
    }
  }
  `);

export default function StudentTable() {
  const router = useRouter();
  const { data, refetch } = useQuery(GET_JOBS_QUERY);

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Jobs
        <button
          onClick={() => {
            router.push(`/admin/new-job`);
          }}
        >
          <AddStudent />
        </button>
      </div>
      <div className="rounded-b-xl grid  grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Title </div>
          <div className="">Industry </div>
          <div className="max-md:hidden">Description </div>
        </div>
        <StudentList>
          {data?.getJobs?.map((job) => (
            <div className="grid" key={job.id}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/${job.id}`);
                }}
              >
                <StudentListItem
                  key={job?.id}
                  name={job?.title}
                  registration_number={job?.industry}
                  phone_number={job?.description}
                />
              </div>
            </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
