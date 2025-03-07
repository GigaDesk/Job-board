"use client";

import { useQuery } from "@apollo/client";
import Job from "./job";
import { gql } from "@/__generated__";

const GET_JOB_LISTING_QUERY = gql(`
query getlistingJobs {
  getJobs {
    id
    title
    description
    location
  }
}
  `);

export default function JobListings() {
  const { data } = useQuery(GET_JOB_LISTING_QUERY);
  return (
    <div className="w-full p-4 overflow-auto grid md:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
      {data?.getJobs?.map((job) => (
        <div
          key={job.id}
          className="h-96 grid content-center justify-items-center"
        >
          <Job
            title={job.title}
            location={job.location}
            description={job.description}
          />
        </div>
      ))}
    </div>
  );
}
