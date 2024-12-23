"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import { SchoolPasswordResetValue } from "@/state/store";
import Button from "@mui/joy/Button";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

export default function Detail() {
  
  const snap = useSnapshot(SchoolPasswordResetValue)

  const handleChange = (event: any) => {
    SchoolPasswordResetValue.password = event.target.value
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolPasswordResetValue");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      SchoolPasswordResetValue.password = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("SchoolPasswordResetValue", JSON.stringify(snap.password));
  }, [snap.password]);

  return (
    <div className="grid">
      <PasswordMeterInput handlechange={handleChange} value={snap.password} />
      <Button
        type="submit"
        color="primary"
        sx={{
          "&.MuiButton-colorPrimary": {
            backgroundColor: "#3B0764",
            "&:hover": {
              backgroundColor: "#581C87",
            },
          },
        }}
        disabled={snap.password.length < 8}
      >
        Submit
      </Button>
    </div>
  );
}
