import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ApplicationInstance } from "../state/store";
import { useSnapshot } from "valtio";

export default function SelectEducationLevel() {
  const jobinstance = useSnapshot(ApplicationInstance);

  const handleChange = (event: SelectChangeEvent) => {
    ApplicationInstance.instance.educationLevel = event.target.value;
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Education Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={jobinstance.instance.educationLevel}
        label="Education Level"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Diploma"}>Diploma</MenuItem>
        <MenuItem value={"Bachelor's Degree"}>Bachelor&apos;s Degree</MenuItem>
        <MenuItem value={"Master's Degree"}>Master&apos;s Degree</MenuItem>
        <MenuItem value={"PhD"}>PhD</MenuItem>
      </Select>
    </FormControl>
  );
}
