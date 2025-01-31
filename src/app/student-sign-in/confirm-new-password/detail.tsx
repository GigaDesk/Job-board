"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import Button from "@mui/joy/Button";
import { useState } from "react";

export default function Detail() {
  const [password, setPassword] = useState("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={password}
      />
      <div className="text-red-600 mb-4 text-center"> </div>
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
      >
        Reset password
      </Button>
    </div>
  );
}
