"use client";

import React from "react";
import Button from "@mui/joy/Button";
import { Link } from "@mui/material";
import { JobInstance } from "@/app/(admin)/state/store";
import { useSnapshot } from "valtio";

export default function JobListing() {
  const jobinstance = useSnapshot(JobInstance);

  return (
    <div
      className="w-full p-4 lg:px-32 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full md:w-[700px] lg:w-[750px] text-black">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <div className="text-black font-bold text-xl grid content-center">
              {jobinstance.instance.title}
            </div>
            <div className="text-text-table-gray grid content-center">
              Level: {jobinstance.instance.level}
            </div>
            <div className="text-text-table-gray">
              Location: {jobinstance.instance.location}
            </div>
            <div className="text-black">
              Industry: {jobinstance.instance.industry}
            </div>
            <div className="text-text-table-gray">
              Deadline: {jobinstance.instance.deadline}
            </div>
          </div>
          <div className="grid grid-rows-[50px_1fr]">
            <div className="text-black text-md font-bold">Job Description</div>
            <div className="text-text-table-gray ">
              {jobinstance.instance.description}
            </div>
          </div>
          <div className="grid grid-rows-[50px_50px_50px_1fr]">
            <div className="text-black text-md font-bold">Job Requirements</div>
            <div className="text-text-table-gray">
              Education: {jobinstance.instance.educationLevel}
            </div>
            <div className="text-text-table-gray">
              Experience in years: {jobinstance.instance.experience}
            </div>
            <div className="text-black grid grid-rows-[20px_1fr]">
              <div className="text-black"> Other: </div>
              <div className="">
                <ul className="list-disc p-4">
                  {jobinstance.instance.requirements.map(
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
          {jobinstance.instance.companyName != null ||
          jobinstance.instance.companyLocation != null ||
          jobinstance.instance.companyIndustry != null ||
          jobinstance.instance.minimumEmployees != null ||
          jobinstance.instance.maximumEmployees != null ||
          jobinstance.instance.companyDescription != null ? (
            <div className="grid gap-4">
              <div className="text-black font-bold text-md grid content-center">
                Company Details
              </div>

              {jobinstance.instance.companyName != null ? (
                <div className="text-text-table-gray grid content-center">
                  Company Name: {jobinstance.instance.companyName}
                </div>
              ) : null}

              {jobinstance.instance.companyLocation != null ? (
                <div className="text-text-table-gray">
                  Company Location: {jobinstance.instance.companyLocation}
                </div>
              ) : null}

              {jobinstance.instance.companyIndustry != null ? (
                <div className="text-text-table-gray grid content-center">
                  Company Industry: {jobinstance.instance.companyIndustry}
                </div>
              ) : null}

              {jobinstance.instance.minimumEmployees != null &&
              jobinstance.instance.maximumEmployees != null ? (
                <div className="text-text-table-gray">
                  Company Size: {jobinstance.instance.minimumEmployees} -{" "}
                  {jobinstance.instance.maximumEmployees} employees
                </div>
              ) : null}

              {jobinstance.instance.companyDescription != null ? (
                <div className="grid grid-rows-[50px_1fr]">
                  <div className="text-black text-md font-bold">
                    Company Description
                  </div>
                  <div className="text-text-table-gray ">
                    {jobinstance.instance.companyDescription}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <div>
            <Link
              href={
                jobinstance.instance.externalApplicationLink != null
                  ? jobinstance.instance.externalApplicationLink
                  : undefined
              }
            >
              <Button>Apply</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
