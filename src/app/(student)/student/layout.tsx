"use client";

import Sidebar from "@/components/drawer/sidebar";
import CompanyStatement from "@/components/splash/companystatement";
import SwipeableTemporaryDrawer from "@/components/drawer/swipeabledrawer";
import SideDrawerContent from "@/components/drawer/sidedrawercontent";
import { useSnapshot } from "valtio";
import { AuthenticationToken, SideDrawerState } from "@/state/store";
import Navbar from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StudentPageLayout({ home }: { home: React.ReactNode }) {
  const snap = useSnapshot(SideDrawerState);

  const router = useRouter();

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

  useEffect(() => {
    const data = window.localStorage.getItem("AuthenticationToken");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      if (Parseddata === "") {
        router.push(`/student-sign-in`);
      }
      AuthenticationToken.token = Parseddata;
    } else {
      router.push(`/student-sign-in`);
    }
  }, []);

  return (
    <div
      className="h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <Sidebar />
      <div className="grow grid h-screen relative">
        <Navbar />
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
