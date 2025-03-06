import { Stack } from "@mui/joy";
import Link from "next/link";

//PagesSection shows the navigable pages of the application
export default function PagesSection() {
  return (
    <div className="p-4 text-black">
      <Stack spacing={2}>
        <div className="">Pages</div>
        <Link href="/admin">
          <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/admin/new-job">
          <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
            New Job
          </div>
        </Link>
        <Link href="/admin/unapproved-jobs">
          <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
            Unapproved Jobs
          </div>
        </Link>
      </Stack>
    </div>
  );
}
