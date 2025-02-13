"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";

// RoutesToggle shows a list of routes to navigate when clicked
export default function RoutesToggle() {
  return (
    <div className="grid content-center p-2 rounded-lg text-black text-xl hover:bg-hover-gray">
      <div>
        Home
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
