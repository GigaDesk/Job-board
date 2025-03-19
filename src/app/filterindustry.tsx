import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function FilterIndustry() {
  const [industry, setIndustry] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setIndustry(event.target.value)
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Industry</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={industry}
        label="Industry"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Beginner"}>Technology</MenuItem>
        <MenuItem value={"Intermediate"}>Retail</MenuItem>
        <MenuItem value={"Senior"}>Automotive</MenuItem>
      </Select>
    </FormControl>
  );
}