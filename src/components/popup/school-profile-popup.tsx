"use client";

import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import { ApolloError } from "@apollo/client";

//defines the properties of a SchoolProfilePopUp
export interface SchoolProfilePopUpProps {
// name of the school
  name?: string;
// phone number of a school
  phone_number?: string;
// indicates if the component is in a loading state
  loading: boolean;
// shows the error that arise from rendering the component
  error?: ApolloError;
}

//SchoolProfilePopUp displays a school's profile
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
