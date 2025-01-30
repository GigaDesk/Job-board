"use client";

import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";

export default function StudentProfilePopUp() {
  return (
    <div className="shadow-lg">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-72 md:w-96 h-96 rounded-xl py-4 text-sm grid justify-items-center"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={2}>
            <div className="grid justify-items-center gap-4">
              <button className="rounded-full w-[80px] h-[80px] bg-white border border-border-gray"></button>
              <h4 className="font-medium"> Leon Kenyaga </h4>
            </div>
            <div className="grid justify-items-center">0719226150</div>
            <div className="grid justify-items-center">
              SCT-251-035/2019
            </div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}