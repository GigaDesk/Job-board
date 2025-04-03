"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ActiveRoute } from "../../../../../state/store";
import Button from "@mui/joy/Button";
import { Link } from "@mui/material";
import AcceptApplicationButton from "./accept-application-button";
import PendApplicationButton from "./pend-application-button";
import RejectApplicationButton from "./reject-application-button";

const FIND_EMPLOYER_JOB_APPLICATION_QUERY = gql(`
 query findEmployerApplication($id: Int!){
  findApplication(id: $id){
    id
    job{
      id
      title
    }
    employee{
        id
        name
        phone_number
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

  const { data } = useQuery(FIND_EMPLOYER_JOB_APPLICATION_QUERY, {
    variables: { id: params.application as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full text-black grid gap-4">
        <div className="text-black text-md font-bold">Applicant Details</div>
        <div className="text-text-table-gray cursor-pointer">
          <span className="text-black"> Name: </span>
          {data?.findApplication.employee.name}
        </div>
        <div className="text-text-table-gray">
          <span className="text-black"> Contact: </span>
          {data?.findApplication.employee.phone_number}
        </div>
        <div className="text-black text-md font-bold">Application Details</div>
        <div
          className="text-text-table-gray cursor-pointer"
          onClick={() => {
            router.push(`/employer/${data?.findApplication.job.id}`);
          }}
        >
          <span className="text-black"> Job: </span>
          <Button variant="plain"> {data?.findApplication.job.title}</Button>
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
        <div className="grid grid-cols-[100px_100px_100px] gap-8">
          <AcceptApplicationButton
            id={data?.findApplication.id as number}
            status={data?.findApplication.status.toString() as string}
          />
          <PendApplicationButton
            id={data?.findApplication.id as number}
            status={data?.findApplication.status.toString() as string}
          />
          <RejectApplicationButton 
          id={data?.findApplication.id as number}
          status={data?.findApplication.status.toString() as string}
          />
        </div>
      </div>
    </div>
  );
}
