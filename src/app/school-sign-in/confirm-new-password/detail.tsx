"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import { SchoolPasswordResetValue } from "@/state/store";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

export default function Detail() {
  const snap = useSnapshot(SchoolPasswordResetValue);

  const [password, setPassword] = useState("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolPasswordResetValue");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      SchoolPasswordResetValue.password = Parseddata;
    }
  }, []);

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={snap.password}
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
        disabled={password != snap.password}
      >
        Reset password
      </Button>
    </div>
  );
}
