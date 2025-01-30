"use client";

import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import { useState } from "react";

export default function Detail() {
  const [registrationNumber, setRegistrationNumber] = useState("");

  const handleChangeRegistrationNumber = (event: any) => {
    setRegistrationNumber(event.target.value);
  };

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <Input
          placeholder="Enter registration number in here…"
          onChange={handleChangeRegistrationNumber}
          value={registrationNumber}
        />
        <div className="text-red-600 mb-4 text-center"></div>
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
          disabled={registrationNumber.length < 1}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
