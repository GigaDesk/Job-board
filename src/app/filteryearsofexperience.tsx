import * as React from "react";
import TextField from "@mui/material/TextField";
import { FilterInstance } from "@/state/store";
import { useSnapshot } from "valtio";

export default function FilterYearsofExperience() {
  const filterinstance = useSnapshot(FilterInstance);

  const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    FilterInstance.instance.experience = e.target.value as unknown as number;
  };

  return (
    <TextField
      placeholder="Years of experience"
      onChange={handleChangeExperience}
      value={filterinstance.instance.experience}
      type="number"
      size="small"
    />
  );
}
