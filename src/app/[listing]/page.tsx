"use client";

import CompanyStatement from "@/components/splash/companystatement";
import JobListing from "./job-listing";
import { useRouter } from "next/navigation";
import Button from "@mui/joy/Button";

export default function Listing() {
  const router = useRouter();

  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
        <div className="px-2 md:px-20 py-8 md:py-2">
      <div className="flex justify-between">
        <div
          className="grid content-center p-2 rounded-lg text-black text-xl"
          style={{ fontFamily: "McLaren" }}
        >
          <div>Jobs Park</div>
        </div>
        <div className="grid grid-cols-2">
          <button
            className="text-sky-600 text-center"
            onClick={() => {
              router.push(`/employee-sign-in`);
            }}
          >
            Login
          </button>
          <Button
            onClick={() => {
              router.push(`/employer-sign-in`);
            }}
          >
            Post a job
          </Button>
        </div>
      </div>
      </div>
      <JobListing />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}
