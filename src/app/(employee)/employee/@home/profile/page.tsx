"use client";

import { useEffect } from "react";
import { ActiveRoute } from "../../../state/store";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";

const GET_EMPLOYEE_PROFILE_QUERY = gql(`
  query getEmployeeProfile1{
    getEmployeeProfile{
      name
      phone_number
      profilepicture
    }
  }
  `);

export default function Home() {
  useEffect(() => {
    ActiveRoute.instance = "Profile";
  }, []);

  const { data } = useQuery(GET_EMPLOYEE_PROFILE_QUERY);

  return (
    <div
      className="w-full p-4 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full text-black">
        <div className="grid gap-4">
          <div className="text-black text-md font-bold">
            Profile Information
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Name: </span>
            {data?.getEmployeeProfile?.name}
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Contact: </span>
            {data?.getEmployeeProfile?.phone_number}
          </div>
        </div>
      </div>
    </div>
  );
}
