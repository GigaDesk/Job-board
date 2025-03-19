"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import Link from "next/link";
import { ActiveRoute } from "@/app/(admin)/state/store";
import { useSnapshot } from "valtio";

//PopupRoutes displays navigable routes within the application
export default function PopupRoutes() {
  const route = useSnapshot(ActiveRoute);

  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-52 rounded-xl py-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <Link href="/admin">
              {route.instance == "Home" ? (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                  <h4 className="font-medium">Home</h4>
                </div>
              ) : (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 text-black">
                  <h4 className="font-medium">Home</h4>
                </div>
              )}
            </Link>

            <Link href="/admin/new-job">
              {route.instance == "New Job" ? (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                  <h4 className="font-medium">New Job</h4>
                </div>
              ) : (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 text-black">
                  <h4 className="font-medium">New Job</h4>
                </div>
              )}
            </Link>
            <Link href="/admin/unapproved-jobs">
              {route.instance == "Unapproved Jobs" ? (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                  <h4 className="font-medium">Unapproved Jobs</h4>
                </div>
              ) : (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 text-black">
                  <h4 className="font-medium">Unapproved Jobs</h4>
                </div>
              )}
            </Link>
            <Link href="/admin/employers">
              {route.instance == "Employers" ? (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                  <h4 className="font-medium">Employers</h4>
                </div>
              ) : (
                <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 text-black">
                  <h4 className="font-medium">Employers</h4>
                </div>
              )}
            </Link>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
