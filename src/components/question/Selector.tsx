"use client";

import Checkbox from "@mui/material/Checkbox";
import { purple } from "@mui/material/colors";

//Selector renders a checkbox that shows a selected choice in a multichoice scenario. 
export default function Selector(props: {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
