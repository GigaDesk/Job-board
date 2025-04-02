"use client";

import { gql } from "@/__generated__/gql";
import StudentList from "../../studentlist";
import StudentListItem from "../../studentlistitem";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_PENDING_APPLICATIONS_QUERY = gql(`
 query getEmployeePendingApplications {
  getEmployeeProfile {
    applications(status: PENDING){
    id
    job{
      title
      location
      employer{
        name
      }
    }
  }
}
}
  `);

export default function PendingApplicationsTable() {
  const router = useRouter();

  const { data, refetch } = useQuery(GET_PENDING_APPLICATIONS_QUERY, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Pending Job Applications
      </div>
      <div className="rounded-b-xl grid grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Title </div>
          <div className=""> Company </div>
          <div className="max-md:hidden">Location </div>
        </div>
        <StudentList>
        {data?.getEmployeeProfile?.applications?.map((application) => (
          <div className="grid" key={application.id}>
            <div
              className="cursor-pointer"
              onClick={() => {
                router.push(`/employee/applications/${application.id}`);
              }}
            >
              <StudentListItem
                name={application.job.title}
                registration_number={application.job.employer?.name}
                phone_number={application.job.location}
              />
            </div>
          </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
