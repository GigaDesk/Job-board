"use client";

import { ApolloError } from "@apollo/client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";

export interface StudentSchoolProfileProps {
  name?: string;
  loading: boolean;
  error?: ApolloError;
}

export default function StudentSchoolProfile(props: StudentSchoolProfileProps) {
  return (
    <div className="grid content-center p-2 rounded-lg text-black text-xl hover:bg-hover-gray">
      <div>
        {props.name}
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}