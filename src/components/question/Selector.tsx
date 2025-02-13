"use client";

import Checkbox from "@mui/material/Checkbox";
import { purple } from "@mui/material/colors";

export default function Selector(props: {
  checked: boolean;
  handleChange: any;
}) {
  return (
    <div className=" w-10 grid justify-items-center">
      <Checkbox
        checked={props.checked}
        onChange={props.handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          "&.Mui-checked": {
            color: purple[900],
          },
        }}
      />
    </div>
  );
}
