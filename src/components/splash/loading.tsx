"use client";

import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <div className="grid justify-items-center">
      <div className="w-24">
        <LinearProgress color="secondary" />
      </div>
    </div>
  );
}
