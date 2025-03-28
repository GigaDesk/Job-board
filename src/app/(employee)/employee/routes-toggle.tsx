"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";
import { ActiveRoute } from "../state/store";
import { useSnapshot } from "valtio";

// RoutesToggle shows a list of routes to navigate when clicked
export default function RoutesToggle() {
  const route = useSnapshot(ActiveRoute);
  return (
    <div className="grid content-center p-2 rounded-lg text-black text-xl hover:bg-hover-gray">
      <div>
        {route.instance}
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}