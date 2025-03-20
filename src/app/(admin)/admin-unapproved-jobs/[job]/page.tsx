import CompanyStatement from "@/components/splash/companystatement";
import JobListing from "./job-listing";

export default function Listing() {
  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <div className="h-20"></div>
      <JobListing />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}