"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ActiveRoute } from "../../../../state/store";
import Button from "@mui/joy/Button";
import { Link } from "@mui/material";

const FIND_JOB_APPLICATION_QUERY = gql(`
 query findApplication($id: Int!){
  findApplication(id: $id){
    id
    job{
      id
      employer{
        id
        name
        Website
      }
      title
    }
    experience
    educationLevel
    coverLetterUrl
    resumeeUrl
    status
  }
}
  `);

export default function JobListing() {
  const router = useRouter();

  const params = useParams();

  useEffect(() => {
    ActiveRoute.instance = "Application";
  }, []);

  const { data } = useQuery(FIND_JOB_APPLICATION_QUERY, {
    variables: { id: params.application as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full text-black">
        <div className="grid gap-4">
          <div className="text-black text-md font-bold">
            Application Details
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Job: </span>
            <Button
              variant="plain"
              onClick={() => {
                router.push(`/employee/${data?.findApplication.job.id}`);
              }}
            >
              {data?.findApplication.job.title}{" "}
            </Button>
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Company: </span>
            <Link
              href={
                data?.findApplication.job.employer?.Website != null
                  ? data.findApplication.job.employer.Website
                  : undefined
              }
            >
              {data?.findApplication.job.employer?.name}
            </Link>
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Status: </span>
            {data?.findApplication.status}
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Entered Years of Experience:</span>{" "}
            {data?.findApplication.experience}
          </div>
          <div className="text-text-table-gray">
            <span className="text-black">Entered Education Level: </span>{" "}
            {data?.findApplication.educationLevel}
          </div>
          <div className="text-black">
            Cover Letter:
            <Link href={data?.findApplication.coverLetterUrl}>
              <Button variant="plain">View pdf</Button>
            </Link>
          </div>
          <div className="text-black">
            Resume:
            <Link href={data?.findApplication.resumeeUrl}>
              <Button variant="plain">View pdf</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
