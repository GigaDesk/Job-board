"use client";

import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// defines the properties of the SwipeableTemporaryDrawer component 
export interface SwipeableTemporaryDrawerProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  //Indicates if the drawer is open or not
  open?: boolean;
  //The content of the SwipeableTemporaryDrawer
  children?: React.JSX.Element;
}

// SwipeableTemporaryDrawer slides from the left side of the screen  
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
