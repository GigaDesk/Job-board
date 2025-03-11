"use client";

import { useQuery } from "@apollo/client";
import Job from "./job";
import { gql } from "@/__generated__";
import CvPoster from "./cvposter";

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
    <div className="w-full p-4 overflow-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
     <div className="px-8 md:px-8 lg:px-16">
     <CvPoster/>
     </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {data?.getJobs?.map((job) => (
          <div
            key={job.id}
            className="h-96 grid content-center justify-items-center"
          >
            <Job
              id={job.id}
              title={job.title}
              location={job.location}
              description={job.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
