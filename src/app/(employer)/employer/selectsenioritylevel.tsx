import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { JobInstance } from "../state/store";
import { useSnapshot } from "valtio";

export default function SelectSeniorityLevel() {
  const jobinstance = useSnapshot(JobInstance);

  const handleChange = (event: SelectChangeEvent) => {
    JobInstance.instance.level = event.target.value;
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={jobinstance.instance.level}
        label="Level"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Beginner"}>Beginner</MenuItem>
        <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
        <MenuItem value={"Senior"}>Senior</MenuItem>
      </Select>
    </FormControl>
  );
}
