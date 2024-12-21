"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import { SchoolSignup, SchoolSignupInstance } from "@/state/store";
import { useSnapshot } from "valtio";
import Button from "@mui/joy/Button";
import { useEffect } from "react";

export default function Detail() {
  const snap = useSnapshot(SchoolSignupInstance);

  const handleChange = (event: any) => {
    SchoolSignupInstance.instance.password = event.target.value;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolSignUp");
    if (data !== null) {
      const Parseddata: SchoolSignup = JSON.parse(data);
      SchoolSignupInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("SchoolSignUp", JSON.stringify(snap.instance));
  }, [snap.instance]);

  return (
    <div className="grid">
      <PasswordMeterInput
        handlechange={handleChange}
        value={snap.instance.password}
      />
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
        disabled={snap.instance.password.length < 8}
      >
        Submit
      </Button>
    </div>
  );
}
