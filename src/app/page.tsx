"use client";

import CompanyStatement from "@/components/splash/companystatement";
import JobListings from "./job-listings";
import { useRouter } from "next/navigation";
import Button from "@mui/joy/Button";
import FilterEducationLevel from "./filtereducationlevel";
import FilterSeniorityLevel from "./filtersenioritylevel";
import FilterIndustry from "./filterindustry";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <div className="h-28 px-2 md:px-20 py-8 md:py-2 grid md:grid-rows-2 gap-4">
        <div className="flex justify-between">
          <div
            className="grid content-center p-2 rounded-lg text-black text-xl"
            style={{ fontFamily: "McLaren" }}
          >
            <div>Jobs Park</div>
          </div>
          <div className="grid grid-cols-2">
            <button className="text-sky-600 text-center">Login</button>
            <Button
              onClick={() => {
                router.push(`/admin`);
              }}
            >
              Post a job
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 content-center gap-4 text-text-table-gray max-md:hidden">
          <div className="grid content-center">Find a Job</div>
          <FilterEducationLevel />
          <FilterIndustry />
          <FilterSeniorityLevel />
          <Button>Search</Button>
        </div>
      </div>
      <JobListings />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}
