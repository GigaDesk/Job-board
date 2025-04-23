"use client";

import { useEffect } from "react";
import { ActiveRoute } from "../../../state/store";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import Button from "@mui/joy/Button";
import { Link } from "@mui/material";

const GET_EMPLOYER_PROFILE_QUERY = gql(`
  query getEmployerProfile1{
    getEmployerProfile{
      name
      phone_number
      badge
      Website
    }
  }
  `);

export default function Home() {
  useEffect(() => {
    ActiveRoute.instance = "Profile";
  }, []);

  const { data } = useQuery(GET_EMPLOYER_PROFILE_QUERY);

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
            {data?.getEmployerProfile?.name}
          </div>
          <div className="text-text-table-gray">
            <span className="text-black"> Contact: </span>
            {data?.getEmployerProfile?.phone_number}
          </div>
          <div className="text-black">
            Website:
            <Link
              href={
                data?.getEmployerProfile?.Website == null
                  ? undefined
                  : data?.getEmployerProfile?.Website
              }
            >
              <Button variant="plain">
                {data?.getEmployerProfile?.Website}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
