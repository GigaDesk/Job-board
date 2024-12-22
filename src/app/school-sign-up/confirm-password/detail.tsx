"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import { SchoolSignup, SchoolSignupInstance } from "@/state/store";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

export default function Detail() {
  const snap = useSnapshot(SchoolSignupInstance);

  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
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
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={snap.instance.password}
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
        disabled={snap.instance.password != value}
      >
        Submit
      </Button>
    </div>
  );
}
