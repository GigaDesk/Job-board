"use client";

import Sidebar from "../school/sidebar";
import CompanyStatement from "@/components/splash/companystatement";
import SwipeableTemporaryDrawer from "@/components/drawer/swipeabledrawer";
import SideDrawerContent from "../school/sidedrawercontent";
import { useSnapshot } from "valtio";
import { SideDrawerState } from "@/state/store";
import Navbar from "../school/navbar";

export default function SchoolPageLayout({
  home
}: {
  home: React.ReactNode;
}) {
  const snap = useSnapshot(SideDrawerState);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      SideDrawerState.show = open;
    };

  return (
    <div
      className="h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <Sidebar />
      <div className="grow grid h-screen relative">
        <Navbar/>
        {home}
        <div className="p-2">
          <CompanyStatement />
        </div>
      </div>
      <div className="lg:hidden">
        <SwipeableTemporaryDrawer toggleDrawer={toggleDrawer} open={snap.show}>
          <SideDrawerContent />
        </SwipeableTemporaryDrawer>
      </div>
    </div>
  );
}
