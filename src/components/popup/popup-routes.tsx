"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import Link from "next/link";

//PopupRoutes displays navigable routes within the application
export default function PopupRoutes() {
  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-52 rounded-xl py-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <Link href="/admin">
              <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                <h4 className="font-medium">Home</h4>
              </div>
            </Link>
            <Link href="/admin/unapproved-jobs">
              <div className="rounded-full hover:bg-hover-gray hover:text-black cursor-pointer mx-2 px-4 p-2 bg-light-blue text-bright-blue">
                <h4 className="font-medium">Unapproved Jobs</h4>
              </div>
            </Link>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
