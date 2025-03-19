"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import { SchoolSignup, SchoolSignupInstance } from "../../state/store";
import { useSnapshot } from "valtio";
import Button from "@mui/joy/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Detail() {
  const router = useRouter();

  const schoolsignupinstance = useSnapshot(SchoolSignupInstance);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    window.localStorage.setItem(
      "SchoolSignUp",
      JSON.stringify(schoolsignupinstance.instance)
    );
  }, [schoolsignupinstance.instance]);

  return (
    <div className="grid">
      <PasswordMeterInput
        handlechange={handleChange}
        value={schoolsignupinstance.instance.password}
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
        disabled={schoolsignupinstance.instance.password.length < 8}
        onClick={() => {
          router.push(`/employee-sign-up/confirm-password`);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
