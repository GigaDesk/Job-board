import CompanyStatement from "@/components/splash/companystatement";
import JobListings from "./job-listings";

export default function Home() {
  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <div className="h-20"></div>
      <JobListings />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}
