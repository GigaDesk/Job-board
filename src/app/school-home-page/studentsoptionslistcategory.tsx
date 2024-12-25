"use client";

import OptionsListItem from "@/components/list/optionslist/optionslistitem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { useState } from "react";

export default function StudentOptionsListCategory() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <button
        className="w-full hover:bg-purple-900 grid grid-cols-2 py-2"
        onClick={handleClick}
      >
        <h3
          className="text-md font-medium text-white"
          style={{ fontFamily: "Inter" }}
        >
          {" "}
          Students{" "}
        </h3>
        <div className="grid justify-items-end pr-4">
          {open ? (
            <ExpandLess sx={{ color: "white" }} />
          ) : (
            <ExpandMore sx={{ color: "white" }} />
          )}
        </div>
      </button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <OptionsListItem>View Students</OptionsListItem>
        <OptionsListItem>Add Students</OptionsListItem>
      </Collapse>
    </div>
  );
}
