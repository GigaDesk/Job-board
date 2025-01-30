"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";

export default function SchoolProfile() {
  return (
    <div className="grid content-center p-2 rounded-lg text-black text-xl hover:bg-hover-gray">
      <div>
        Kisii School
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}