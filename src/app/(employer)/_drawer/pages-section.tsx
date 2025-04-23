import { Stack } from "@mui/joy";
import Link from "next/link";
import { ActiveRoute } from "../state/store";
import { useSnapshot } from "valtio";
import { SideDrawerState } from "@/state/store";

//PagesSection shows the navigable pages of the application
export default function PagesSection() {
  const route = useSnapshot(ActiveRoute);
  return (
    <div className="p-4 text-black">
      <Stack spacing={2}>
        <div className="">Pages</div>
        <Link
          href="/employer"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
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
        <Link
          href="/employer/profile"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
          {route.instance == "Profile" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Profile
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Profile
            </div>
          )}
        </Link>
        <Link
          href="/employer/new-job"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
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
        <Link
          href="/employer/unapproved-jobs"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
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
        <Link
          href="/employer/analytics"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
          {route.instance == "Analytics" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Analytics
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Analytics
            </div>
          )}
        </Link>
      </Stack>
    </div>
  );
}
