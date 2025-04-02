"use client";

import { useEffect } from "react";
import ApplicationsTable from "./applications-table";
import AcceptedApplicationsTable from "./accepted-applications-table";
import RejectedApplicationsTable from "./rejected-applications-table";
import PendingApplicationsTable from "./pending-applications-table";
import { ActiveRoute } from "../../../state/store";
import Stack from "@mui/joy/Stack";

export default function Home() {
  useEffect(() => {
    ActiveRoute.instance = "Applications";
  }, []);

  return (
    <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full max-md:p-2">
      <div className="w-full md:w-[700px] lg:w-[900px] text-black">
      <Stack spacing={5}>
        <ApplicationsTable />
        <AcceptedApplicationsTable />
        <RejectedApplicationsTable />
        <PendingApplicationsTable />
      </Stack>
      </div>
    </div>
  );
}
