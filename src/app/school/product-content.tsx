"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";

export default function ProductContent() {
  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-52 rounded-xl py-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <h3 className="font-medium px-4">Eardrum</h3>
            <div className="hover:bg-hover-gray cursor-pointer px-4">
              <h4 className="font-medium">Release/v1.0.1</h4>
              <p className="text-xs ">Now available for testing</p>
            </div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
