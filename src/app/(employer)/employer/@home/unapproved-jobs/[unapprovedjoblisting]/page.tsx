"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import ApproveJobButton from "../approve-job-button";
import { ActiveRoute } from "@/app/(admin)/state/store";

const FIND_UNAPPROVEDJOB_QUERY = gql(`
  query findUnapprovedJob($id: Int!){
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
    }
  }
  `);

export default function UnapprovedJobListing() {
  const params = useParams();

  useEffect(() => {
    ActiveRoute.instance = "Unapproved Job";
  }, []);

  const { data } = useQuery(FIND_UNAPPROVEDJOB_QUERY, {
    variables: { id: params.unapprovedjoblisting as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4 lg:px-32 overflow-auto grid gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="grid gap-4">
        <div className="grid grid-cols-2">
          <div className="text-black font-bold text-xl">
            {data?.findUnapprovedJob.title}
          </div>
          <div className="text-text-table-gray">
            Level: {data?.findUnapprovedJob.level}
          </div>
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
      <div className="">
        <ApproveJobButton id={data?.findUnapprovedJob.id as number} />
      </div>
    </div>
  );
}
