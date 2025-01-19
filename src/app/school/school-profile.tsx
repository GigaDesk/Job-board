"use client";

import React from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";

export default function SchoolProfile() {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);

  return (
    <div className="grid content-center p-4">
      <div className="rounded-full hover:bg-hover-gray w-[48px] h-[48px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
        <button
          className="rounded-full w-[40px] h-[40px] bg-white border border-border-gray"
          onClick={handleClick}
        ></button>
      </div>
      <BasePopup open={open} anchor={anchor} placement="bottom-end">
        <div className="shadow-lg">
          <Card sx={{ backgroundColor: "#F0F4F9" }}>
            <div
              className="w-96 h-96 rounded-xl py-4 text-sm grid justify-items-center"
              style={{ fontFamily: "McLaren" }}
            >
              <Stack spacing={2}>
                <div className="grid justify-items-center gap-4">
                  <button className="rounded-full w-[80px] h-[80px] bg-white border border-border-gray"></button>
                  <h4 className="font-medium"> Blue Shine Academy</h4>
                </div>
                <div className="grid justify-items-center">0719226150</div>
                <div className="grid justify-items-center">
                  wwww.blueshineacademy.ac.ke
                </div>
              </Stack>
            </div>
          </Card>
        </div>
      </BasePopup>
    </div>
  );
}
