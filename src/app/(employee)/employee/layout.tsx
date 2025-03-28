"use client";

import CompanyStatement from "@/components/splash/companystatement";
import SwipeableTemporaryDrawer from "../_drawer/swipeabledrawer";
import SideDrawerContent from "../_drawer/sidedrawercontent";
import { useSnapshot } from "valtio";
import { AuthenticationToken, SideDrawerState } from "@/state/store";
import Navbar from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SinceSignIn } from "@/utils/session-management/signin";


export default function SchoolPageLayout({ home }: { home: React.ReactNode }) {

  

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

  const handleSinceSignIn = () => {
    const hours = SinceSignIn();
    if (hours > 22) {
      router.push(`/employee-sign-in`);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("AuthenticationToken");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      if (Parseddata === "") {
        router.push(`/employee-sign-in`);
      }
      AuthenticationToken.token = Parseddata;
    } else {
      router.push(`/employee-sign-in`);
    }
  }, [router]);

  useEffect(() => {
    const data = window.localStorage.getItem("LastSignedInAs");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      if (Parseddata !== "employee") {
        router.push(`/employee-sign-in`);
      }
    } else {
      router.push(`/employee-sign-in`);
    }
  }, [router]);

  useEffect(() => {
    handleSinceSignIn();
  });

  return (
    <div
      className="h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="grow grid h-screen relative">
        <Navbar />
        
        {home}
        <div className="p-2">
          <CompanyStatement />
        </div>
      </div>
      <div className="">
        <SwipeableTemporaryDrawer toggleDrawer={toggleDrawer} open={snap.show}>
          <SideDrawerContent />
        </SwipeableTemporaryDrawer>
      </div>
    </div>
  );
}
