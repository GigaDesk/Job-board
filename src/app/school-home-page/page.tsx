"use client";

import NavBar from "@/components/navbar/navbar";
import OptionsContainer from "./optionscontainer";
import SwipeableTemporaryDrawer from "@/components/drawer/swipeabledrawer";
import { useState } from "react";

export default function SchoolHomePage() {
  const [state, setState] = useState(false);

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
    <div className="min-h-screen bg-white grid" style={{ fontFamily: "Inter" }}>
      <main className="lg:grid lg:grid-cols-[1fr_2.5fr_1.2fr] h-full">
        <div className="lg:hidden">
          <NavBar
            onClickMenu={() => {
              setState(true);
            }}
          />
        </div>
        <div className="bg-purple-950 max-lg:hidden">
          <OptionsContainer />
        </div>
        <div className="max-lg:hidden">students</div>
        <div className="max-lg:hidden"> profile </div>
      </main>
      <div className="lg:hidden">
        <SwipeableTemporaryDrawer toggleDrawer={toggleDrawer} open={state}>
          <OptionsContainer />
        </SwipeableTemporaryDrawer>
      </div>
    </div>
  );
}
