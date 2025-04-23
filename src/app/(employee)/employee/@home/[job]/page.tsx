"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ActiveRoute } from "../../../state/store";
import { Button } from "@mui/joy";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import ApplicationForm from "./application-form";

const FIND_ADMIN_JOB_QUERY = gql(`
  query findEmployeeJob($id: Int!){
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
      employer{
        name
      }
    }
  }
  `);

export default function JobListing() {
  const params = useParams();

  const [modalopen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    ActiveRoute.instance = "Job";
  }, []);

  const { data } = useQuery(FIND_ADMIN_JOB_QUERY, {
    variables: { id: params.job as unknown as number }, // Pass the id variable
  });
  return (
    <div
      className="w-full p-4 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full text-black">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-2">
              <div className="text-black">{data?.findJob.employer?.name}</div>
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
              Deadline: {data?.findJob.deadline}
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
          <div>
            <Button onClick={handleOpenModal}>Apply</Button>
          </div>
        </div>
      </div>
      <Modal
        open={modalopen}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="z-1 shadow-xl my-72 md:my-92 lg:my-52 mx-4 md:mx-12">
          <Card sx={{}}>
            <ApplicationForm job_id={params.job as unknown as number} />
          </Card>
        </div>
      </Modal>
    </div>
  );
}
