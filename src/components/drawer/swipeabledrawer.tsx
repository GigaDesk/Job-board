"use client";

import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export interface SwipeableTemporaryDrawerProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  open?: boolean;
  children?: React.JSX.Element;
}

export default function SwipeableTemporaryDrawer(
  props: SwipeableTemporaryDrawerProps
) {
  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={props.open}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        {props.children}
      </SwipeableDrawer>
    </div>
  );
}
