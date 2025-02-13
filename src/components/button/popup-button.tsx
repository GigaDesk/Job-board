"use client";

import * as React from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";

//defines the properties of a PopupButton component
export interface PopupButtonProps {
  // the element that produces a pop up when clicked
  button: React.JSX.Element;
  // the element that pops up
  popupElement: React.JSX.Element;
  // the position of the popupElement
  popupPlacement: any;
}

// PopupButton is an element that produces a popup element of choice when clicked
export default function PopupButton(props: PopupButtonProps) {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);

  return (
    <div className="grid content-center p-2">
      <button onClick={handleClick}>{props.button}</button>
      <BasePopup open={open} anchor={anchor} placement={props.popupPlacement}>
        {props.popupElement}
      </BasePopup>
    </div>
  );
}