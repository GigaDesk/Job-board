"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "next/navigation";
import Button from "@mui/joy/Button";
import { useRouter } from "next/navigation";
import { ToLocalDate } from "@/utils/time-manipulation/toLocal";
import { Link } from "@mui/material";

const FIND_JOB_QUERY = gql(`
  query findJob($id: Int!){
    findJob(id: $id){
      id
      title
      industry
      deadline
      jobUrl
      companyName
      companyLocation
      companyIndustry
      companyDescription
      MinimumEmployees
      MaximumEmployees
      description
      requirements
      level
      location
      educationLevel
      experience
      posted
      employer{
        name
        Website
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
          <Link
            href={
              data?.findJob.employer?.Website != null
                ? data.findJob.employer.Website
                : undefined
            }
          >
            {data?.findJob.employer?.name}
          </Link>
          <div className="text-text-table-gray">
            <ul className="list-disc">
              <li> {data?.findJob.posted} </li>
            </ul>
          </div>
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
      <div>
        <Link
          href={data?.findJob.jobUrl != null ? data?.findJob.jobUrl : undefined}
        >
          <Button
            onClick={data?.findJob.jobUrl != null ? undefined : handleClick}
          >
            Apply
          </Button>
        </Link>
      </div>
    </div>
  );
}
