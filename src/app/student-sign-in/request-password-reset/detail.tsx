"use client";

import Button from "@mui/joy/Button";
import { useState } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "@/components/button/sendotp";

export default function Detail() {
  const [otp, setOtp] = useState("");

  const handleChange = (event: any) => {
    setOtp(event.target.value);
  };

  return (
    <div className="grid">
      <Stack spacing={1}>
        <Input
          placeholder="Enter 6-digit code"
          type="number"
          onChange={handleChange}
          value={otp}
          sx={{
            "&.MuiInput-colorNeutral": {
              display: "grid",
              textAlign: "center",
            },
          }}
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
          disabled={otp.length != 6}
        >
          Verify
        </Button>
        <SendOtp phonenumber={""} />
      </Stack>
    </div>
  );
}
