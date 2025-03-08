"use client";

import CompanyStatement from "@/components/splash/companystatement";
import JobListings from "./job-listings";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <div className="h-20 grid justify-items-end px-20">
        <button
          className="text-sky-600 cursor-pointer text-center"
          onClick={() => {
            router.push(`/admin`);
          }}
        >
          Go to Admin
        </button>
      </div>
      <JobListings />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}
