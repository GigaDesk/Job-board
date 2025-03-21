"use client";

import { useQuery } from "@apollo/client";
import Job from "./job";
import { gql } from "@/__generated__";
import CvPoster from "./cvposter";
import { useSnapshot } from "valtio";
import { FilterInstance } from "@/state/store";
import { useEffect } from "react";

const GET_JOB_LISTING_QUERY = gql(`
query getlistingJobs($filters: JobsFilterParameters) {
  getJobs(filterparameters: $filters){
    id
    title
    description
    location
    employer{
      name
    }
  }
}
  `);

export default function JobListings() {
  const filterinstance = useSnapshot(FilterInstance);

  const handleStringValue = (s: string) => {
    if (s == "") {
      return undefined;
    } else {
      return s;
    }
  };

  const handleNumberStringValue = (s: number | "") => {
    if (s == "") {
      return undefined;
    } else if (s < 1) {
      return undefined;
    } else {
      return s;
    }
  };

  const { data, refetch } = useQuery(GET_JOB_LISTING_QUERY, {
    fetchPolicy: "network-only",
    variables: {
      filters: {
        educationLevel: handleStringValue(
          filterinstance.instance.educationLevel
        ),
        industry: handleStringValue(filterinstance.instance.industry),
        experience: handleNumberStringValue(filterinstance.instance.experience),
      },
    },
  });

  useEffect(() => {
    refetch({
      filters: {
        educationLevel: handleStringValue(
          filterinstance.instance.educationLevel
        ),
        industry: handleStringValue(filterinstance.instance.industry),
        experience: handleNumberStringValue(filterinstance.instance.experience),
      },
    });
  }, [filterinstance.instance, refetch]);

  return (
    <div className="w-full p-4 overflow-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="md:col-span-2 lg:col-span-3">
        <CvPoster />
      </div>
        {data?.getJobs?.map((job) => (
          <div
            key={job.id}
            className="h-96 grid justify-items-stretch"
          >
            <Job
              id={job.id}
              title={job.title}
              location={job.location}
              description={job.description}
              company={job.employer?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
