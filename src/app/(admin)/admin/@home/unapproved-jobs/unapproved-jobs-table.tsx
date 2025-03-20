"use client";

import StudentList from "../../studentlist";
import { gql } from "../../../../../__generated__/gql";
import { useQuery } from "@apollo/client";
import StudentListItem from "../../studentlistitem";
import ApproveJobButton from "./approve-job-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GET_UNAPPROVED_JOBS_QUERY = gql(`
query getUnapprovedJobs{
  getUnapprovedJobs{
    id
    title
    industry
    employer{
      name
    }
  }
}
`);

export default function UnapprovedJobsTable() {
  const router = useRouter();

  const { data, refetch } = useQuery(GET_UNAPPROVED_JOBS_QUERY, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Unapproved Jobs
        <button
          className="hover:text-bright-blue"
          onClick={() => {
            router.push(`/admin-unapproved-jobs`);
          }}
        >
          expand
        </button>
      </div>
      <div className="rounded-b-xl grid  grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid md:grid-cols-[1fr_80px] px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="">Title </div>
            <div className="">Company </div>
            <div className="max-md:hidden">Industry </div>
          </div>
          <div className="grid justify-items-center max-md:hidden">Status</div>
        </div>
        <StudentList>
          {data?.getUnapprovedJobs?.map((unapprovedjob) => (
            <div
              className="grid md:grid-cols-[1fr_100px]"
              key={unapprovedjob?.id}
            >
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/admin-unapproved-jobs/${unapprovedjob.id}`);
                }}
              >
                <StudentListItem
                  name={unapprovedjob?.title}
                  registration_number={unapprovedjob?.employer?.name}
                  phone_number={unapprovedjob?.industry}
                />
              </div>
              <div className="grid content-center max-md:hidden">
                <ApproveJobButton id={unapprovedjob?.id} />
              </div>
            </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
