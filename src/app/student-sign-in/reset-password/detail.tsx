"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import Button from "@mui/joy/Button";
import { useState } from "react";

export default function Detail() {
  const [password, setPassword] = useState("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="grid">
      <PasswordMeterInput handlechange={handleChange} value={password} />
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
        disabled={password.length < 8}
      >
        Submit
      </Button>
    </div>
  );
}
