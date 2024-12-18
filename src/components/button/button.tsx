import * as React from "react";
import { Button } from "@mui/material";

export default function EardrumButton(props: {
  text: string;
  disable: boolean;
}) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#3B0764" }}
        disabled={props.disable}
      >
        {props.text}
      </Button>
    </div>
  );
}
