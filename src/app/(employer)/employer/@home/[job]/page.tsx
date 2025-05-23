"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ActiveRoute } from "@/app/(employer)/state/store";
import Button from "@mui/joy/Button";
import DeleteJobButton from "./delete-job-button";
import { ToLocalDate } from "@/utils/time-manipulation/toLocal";

const FIND_EMPLOYER_JOB_QUERY = gql(`
  query findEmployerJob($id: Int!){
    findJob(id: $id){
      id
      title
      industry
      deadline
      description
      requirements
      level
      location
      posted
      educationLevel
      experience
      companyName
      companyLocation
      companyIndustry
      companyDescription
      MinimumEmployees
      MaximumEmployees
    }
  }
  `);

export default function JobListing() {
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    ActiveRoute.instance = "Job";
  }, []);

  const { data } = useQuery(FIND_EMPLOYER_JOB_QUERY, {
    variables: { id: params.job as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4 lg:px-32 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full md:w-[700px] lg:w-[750px] text-black">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <div className="text-text-table-gray">
              <ul className="list-disc pl-4">
                <li> {data?.findJob.posted} </li>
              </ul>
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
            <div className="text-text-table-gray ">
              {data?.findJob.description}
            </div>
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
          {data?.findJob.companyName != null ||
          data?.findJob.companyLocation != null ||
          data?.findJob.companyIndustry != null ||
          data?.findJob.MinimumEmployees != null ||
          data?.findJob.MaximumEmployees != null ||
          data?.findJob.companyDescription != null ? (
            <div className="grid gap-4">
              <div className="text-black font-bold text-md grid content-center">
                Company Details
              </div>

              {data?.findJob.companyName != null ? (
                <div className="text-text-table-gray grid content-center">
                  Company Name: {data?.findJob.companyName}
                </div>
              ) : null}

              {data?.findJob.companyLocation != null ? (
                <div className="text-text-table-gray">
                  Company Location: {data?.findJob.companyLocation}
                </div>
              ) : null}

              {data?.findJob.companyIndustry != null ? (
                <div className="text-text-table-gray grid content-center">
                  Company Industry: {data?.findJob.companyIndustry}
                </div>
              ) : null}

              {data?.findJob.MinimumEmployees != null &&
              data?.findJob.MaximumEmployees != null ? (
                <div className="text-text-table-gray">
                  Company Size: {data?.findJob.MinimumEmployees} -{" "}
                  {data?.findJob.MaximumEmployees} employees
                </div>
              ) : null}

              {data?.findJob.companyDescription != null ? (
                <div className="grid grid-rows-[50px_1fr]">
                  <div className="text-black text-md font-bold">
                    Company Description
                  </div>
                  <div className="text-text-table-gray ">
                    {data?.findJob.companyDescription}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <Button
            onClick={() => {
              router.push(`/employer/${data?.findJob.id}/applications`);
            }}
          >
            View Applicants
          </Button>
          <Button
            onClick={() => {
              router.push(`/employer/${data?.findJob.id}/edit-job`);
            }}
          >
            Edit
          </Button>
          <DeleteJobButton id={data?.findJob.id as number} />
        </div>
      </div>
    </div>
  );
}
