"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "next/navigation";
import ApproveJobButton from "../../admin/@home/unapproved-jobs/approve-job-button";
import DeleteUnapprovedJobButton from "../../admin/@home/unapproved-jobs/delete-job-button";

const FIND_UNAPPROVEDJOB_QUERY = gql(`
    query findUnapprovedJobListing($id: Int!){
      findUnapprovedJob(id: $id){
        id
        title
        industry
        deadline
        description
        requirements
        level
        location
        educationLevel
        experience
        employer{
            name
        }
      }
    }
    `);

export default function JobListing() {
  const params = useParams();

  const { data } = useQuery(FIND_UNAPPROVEDJOB_QUERY, {
    variables: { id: params.job as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4  lg:px-52 overflow-auto grid gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="grid gap-4">
        <div className="text-black">
          {data?.findUnapprovedJob.employer?.name}
        </div>
        <div className="grid md:grid-cols-2">
          <div className="text-black font-bold text-xl grid content-center">
            {data?.findUnapprovedJob.title}
          </div>
          <div className="text-text-table-gray grid content-center max-md:hidden">
            Level: {data?.findUnapprovedJob.level}
          </div>
        </div>
        <div className="text-text-table-gray grid content-center md:hidden">
            Level: {data?.findUnapprovedJob.level}
          </div>
        <div className="text-text-table-gray">
          Location: {data?.findUnapprovedJob.location}
        </div>
        <div className="text-black">
          Industry: {data?.findUnapprovedJob.industry}
        </div>
        <div className="text-text-table-gray">
          Deadline: {data?.findUnapprovedJob.deadline}
        </div>
      </div>
      <div className="grid grid-rows-[50px_1fr]">
        <div className="text-black text-md font-bold">Job Description</div>
        <div className="text-text-table-gray ">
          {data?.findUnapprovedJob.description}
        </div>
      </div>
      <div className="grid grid-rows-[50px_50px_50px_1fr]">
        <div className="text-black text-md font-bold">Job Requirements</div>
        <div className="text-text-table-gray">
          Education: {data?.findUnapprovedJob.educationLevel}
        </div>
        <div className="text-text-table-gray">
          Experience in years: {data?.findUnapprovedJob.experience}
        </div>
        <div className="text-black grid grid-rows-[20px_1fr]">
          <div className="text-black"> Other: </div>
          <div className="">
            <ul className="list-disc p-4">
              {data?.findUnapprovedJob.requirements?.map(
                (requirement, index) => (
                  <li key={index} className="text-text-table-gray">
                    {requirement}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-[100px_100px]">
        <ApproveJobButton id={data?.findUnapprovedJob.id as number} />
        <DeleteUnapprovedJobButton id={data?.findUnapprovedJob.id as number} />
        </div>
      </div>
    </div>
  );
}
