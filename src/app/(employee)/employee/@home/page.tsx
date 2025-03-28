"use client";

import { useEffect } from "react";
import { ActiveRoute } from "../../state/store";
import JobListings from "../joblistings";

export default function Home() {
  useEffect(() => {
    ActiveRoute.instance = "Home";
  }, []);

  return (
    <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full max-md:p-2">
      <div className="w-full text-black">
        <JobListings />
      </div>
    </div>
  );
}
