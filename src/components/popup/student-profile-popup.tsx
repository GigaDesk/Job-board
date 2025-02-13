"use client";

import React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import { ApolloError } from "@apollo/client";

//defines the properties of StudentProfilePopUp component
export interface StudentProfilePopUpProps {
  // name of the student
  name?: string;
  // phone number of the student
  phone_number?: string;
  // registration number of the student
  registration_number?: string;
  // indicates if the component is in a loading state
  loading: boolean;
  // shows the error that arises from rendering the component
  error?: ApolloError;
}

//StudentProfilePopUp displays a student's profile
export default function StudentProfilePopUp(props: StudentProfilePopUpProps) {
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
              <h4 className="font-medium"> {props.name} </h4>
            </div>
            <div className="grid justify-items-center">{props.phone_number}</div>
            <div className="grid justify-items-center">
              {props.registration_number}
            </div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}