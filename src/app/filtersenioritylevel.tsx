import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function FilterSeniorityLevel() {
  const [seniorityLevel, setSeniorityLevel] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setSeniorityLevel(event.target.value)
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Experience Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={seniorityLevel}
        label="Experience Level"
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