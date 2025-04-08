"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "next/navigation";
import Button from "@mui/joy/Button";
import { useRouter } from "next/navigation";
import { ToLocalDate } from "@/utils/time-manipulation/toLocal";

const FIND_JOB_QUERY = gql(`
  query findJob($id: Int!){
    findJob(id: $id){
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

  const router = useRouter();

  const { data } = useQuery(FIND_JOB_QUERY, {
    variables: { id: params.listing as unknown as number }, // Pass the id variable
  });

  const handleClick = () => {
    router.push(`/employee/${data?.findJob.id}`);
  };
  return (
    <div
      className="w-full p-4  lg:px-52 overflow-auto grid gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="grid gap-4">
        <div className="grid grid-cols-2">
          <div className="text-black">{data?.findJob.employer?.name}</div>
          <div className="text-black">Posted: 1 day ago</div>
        </div>
        <div className="text-black font-bold text-xl grid content-center">
          {data?.findJob.title}
        </div>
        <div className="text-text-table-gray grid content-center">
          Level: {data?.findJob.level}
        </div>
        <div className="text-text-table-gray">
          Location: {data?.findJob.location}
        </div>
        <div className="text-black">Industry: {data?.findJob.industry}</div>
        <div className="text-text-table-gray">
          Deadline: {ToLocalDate(data?.findJob.deadline)}
        </div>
      </div>
      <div className="grid grid-rows-[50px_1fr]">
        <div className="text-black text-md font-bold">Job Description</div>
        <div className="text-text-table-gray ">{data?.findJob.description}</div>
      </div>
      <div className="grid grid-rows-[50px_50px_50px_1fr]">
        <div className="text-black text-md font-bold">Job Requirements</div>
        <div className="text-text-table-gray">
          Education: {data?.findJob.educationLevel}
        </div>
        <div className="text-text-table-gray">
          Experience in years: {data?.findJob.experience}
        </div>
        <div className="text-black grid grid-rows-[20px_1fr]">
          <div className="text-black"> Other: </div>
          <div className="">
            <ul className="list-disc p-4">
              {data?.findJob.requirements?.map((requirement, index) => (
                <li key={index} className="text-text-table-gray">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Button onClick={handleClick}>Apply</Button>
      </div>
    </div>
  );
}
