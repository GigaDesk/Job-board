import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { JobInstance } from "../state/store";
import { useSnapshot } from "valtio";

export default function SelectIndustry() {
  const jobinstance = useSnapshot(JobInstance);

  const handleChangeIndustry = (event: SelectChangeEvent) => {
    JobInstance.instance.industry = event.target.value;
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Industry</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={jobinstance.instance.industry}
        label="Industry"
        onChange={handleChangeIndustry}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Technology"}>Technology</MenuItem>
        <MenuItem value={"Retail"}>Retail</MenuItem>
        <MenuItem value={"Automotive"}>Automotive</MenuItem>
        <MenuItem value={"Media"}>Media</MenuItem>
        <MenuItem value={"Banking"}>Banking</MenuItem>
      </Select>
    </FormControl>
  );
}
