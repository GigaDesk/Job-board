"use client";

import { gql } from "@/__generated__/gql";
import StudentList from "../../../studentlist";
import StudentListItem from "../../../studentlistitem";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const FIND_EMPLOYER_JOB_APPLICATIONS_QUERY = gql(`
  query findEmployerJobApplications($id: Int!){
    findJob(id: $id){
      applications{
        id
        employee{
          name
          phone_number
        }
        status
      }
    }
  }
  `);

export default function ApplicationsTable() {
  const params = useParams();

  const router = useRouter();

  const { refetch, data } = useQuery(FIND_EMPLOYER_JOB_APPLICATIONS_QUERY, {
    variables: { id: params.job as unknown as number }, // Pass the id variable
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="h-[350px] rounded-xl grid grid-rows-[40px_1fr] border border-border-table-gray">
      <div className="rounded-t-xl border-b border-border-table-gray px-2 md:px-4 flex justify-between items-center text-text-table-gray">
        Job Applications
      </div>
      <div className="rounded-b-xl grid grid-rows-[50px_1fr] md:grid-rows-[30px_1fr]">
        <div className="border-b border-border-table-gray grid grid-cols-2 md:grid-cols-3 px-4 md:px-4 md:pr-6 items-center text-text-table-gray">
          <div className="">Name </div>
          <div className=""> Contact </div>
          <div className="max-md:hidden">Status </div>
        </div>
        <StudentList>
          {data?.findJob?.applications?.map((application) => (
            <div className="grid" key={application.id}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/employee/applications/${application.id}`);
                }}
              >
                <StudentListItem
                  name={application.employee.name}
                  registration_number={application.employee.phone_number}
                  phone_number={application.status}
                />
              </div>
            </div>
          ))}
        </StudentList>
      </div>
    </div>
  );
}
