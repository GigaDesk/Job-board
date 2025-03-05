import UnapprovedJobsTable from "./unapproved-jobs-table";

export default function Home() {
  return (
    <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full max-md:p-2">
      <div className="md:w-[700px] lg:w-[900px] text-black">
        <UnapprovedJobsTable />
      </div>
    </div>
  );
}