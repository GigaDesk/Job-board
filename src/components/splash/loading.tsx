"use client";

import LinearProgress from "@mui/material/LinearProgress";

// Loading shows the loading state of the application 
export default function Loading() {
  return (
    <div className="grid justify-items-center">
      <div className="w-24">
        <LinearProgress color="secondary" />
      </div>
    </div>
  );
}
