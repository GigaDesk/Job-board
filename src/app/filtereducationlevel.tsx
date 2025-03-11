import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function FilterEducationLevel() {
  const [educationLevel, setEducationLevel] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEducationLevel(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Education Level</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={educationLevel}
        label="Education Level"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Diploma"}>Diploma</MenuItem>
        <MenuItem value={"Degree"}>Degree</MenuItem>
        <MenuItem value={"Masters"}>Masters</MenuItem>
      </Select>
    </FormControl>
  );
}