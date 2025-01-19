"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";

export default function EardrumStatement() {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);

  return (
    <div className="grid content-center p-2">
      <button
        className="p-2 rounded-lg text-black text-xl hover:bg-hover-gray"
        onClick={handleClick}
      >
        Eardrum
        <ArrowDropDownIcon />
      </button>
      <BasePopup open={open} anchor={anchor} placement="bottom-start">
        <div className="shadow-lg">
          <Card sx={{ backgroundColor: "#F0F4F9" }}>
            <div
              className="w-80 h-52 rounded-xl py-4 text-sm"
              style={{ fontFamily: "McLaren" }}
            >
              <Stack spacing={1}>
                <h3 className="font-medium px-4">Eardrum</h3>
                <div className="hover:bg-hover-gray cursor-pointer px-4">
                  <h4 className="font-medium">Release/v1.0.1</h4>
                  <p className="text-xs ">Now available for testing</p>
                </div>
              </Stack>
            </div>
          </Card>
        </div>
      </BasePopup>
    </div>
  );
}
