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
          href="/employee"
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
          href="/employee/applications"
          onClick={() => {
            SideDrawerState.show = false;
          }}
        >
          {route.instance == "Applications" ? (
            <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
              Applications
            </div>
          ) : (
            <div className="pl-4 py-2 rounded-full text-black hover:bg-hover-gray hover:text-black cursor-pointer">
              Applications
            </div>
          )}
        </Link>
      </Stack>
    </div>
  );
}
