"use client";

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import CompanyStatement from "@/components/splash/companystatement";
import Main from "./main";
import SwipeableTemporaryDrawer from "@/components/drawer/swipeabledrawer";
import React from "react";
import SideDrawerContent from "./sidedrawercontent";

export default function School() {
  const [state, setState] = React.useState(false);

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

      setState(open);
    };

  return (
    <div
      className="h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <Sidebar />
      <div className="grow grid h-screen relative">
        <Navbar
          onClickMenu={() => {
            setState(true);
          }}
        />
        <Main />
        <div className="p-2">
          <CompanyStatement />
        </div>
      </div>
      <div className="lg:hidden">
        <SwipeableTemporaryDrawer toggleDrawer={toggleDrawer} open={state}>
          <SideDrawerContent
            onClickMenu={() => {
              setState(false);
            }}
          />
        </SwipeableTemporaryDrawer>
      </div>
    </div>
  );
}
