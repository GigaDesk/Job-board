"use client";

import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import { ApolloError } from "@apollo/client";


export interface SchoolProfilePopUpProps {
  name?: string;
  phone_number?: string;
  loading: boolean;
  error?: ApolloError;
}

export default function SchoolProfilePopUp(props: SchoolProfilePopUpProps) {
  
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
              <div className="font-medium">{props.name}</div>
            </div>
            <div className="grid justify-items-center">
              {props.phone_number}
            </div>
            <div className="grid justify-items-center"></div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
