"use client";

import * as React from "react";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";

export interface PopupButtonProps {
  button: React.JSX.Element;
  popupElement: React.JSX.Element;
}

export default function PopupButton(props: PopupButtonProps) {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);

  return (
    <div className="grid content-center p-2">
      <button onClick={handleClick}>{props.button}</button>
      <BasePopup open={open} anchor={anchor} placement="bottom-start">
        {props.popupElement}
      </BasePopup>
    </div>
  );
}
