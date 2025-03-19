import { Stack } from "@mui/joy";
import Link from "next/link";
import { ActiveRoute } from "@/app/(admin)/state/store";
import { useSnapshot } from "valtio";

//PagesSection shows the navigable pages of the application
export default function PagesSection() {
  const route = useSnapshot(ActiveRoute);
  return (
    <div className="p-4 text-black">
      <Stack spacing={2}>
        <div className="">Pages</div>
        <Link href="/admin">
          {route.instance == "Home" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Home
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Home
            </div>
          )}
        </Link>
        <Link href="/admin/new-job">
          {route.instance == "New Job" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              New Job
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              New Job
            </div>
          )}
        </Link>
        <Link href="/admin/unapproved-jobs">
          {route.instance == "Unapproved Jobs" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Unapproved Jobs
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Unapproved Jobs
            </div>
          )}
        </Link>
        <Link href="/admin/employers">
          {route.instance == "Employers" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Employers
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Employers
            </div>
          )}
        </Link>
      </Stack>
    </div>
  );
}
