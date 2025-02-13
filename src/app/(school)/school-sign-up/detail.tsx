"use client";

import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { SchoolSignupInstance } from "../state/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SchoolSignup } from "../state/store";
import { useRouter } from "next/navigation";

export default function Detail() {

  const router = useRouter();
  
  const schoolsignupinstance = useSnapshot(SchoolSignupInstance);

  const handleChange = (e: any) => {
    SchoolSignupInstance.instance.name = e.target.value;
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
    <div>
    <Stack spacing={1}>
      <Input
        placeholder="Type school's name here..."
        value={schoolsignupinstance.instance.name}
        onChange={handleChange}
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
        disabled={schoolsignupinstance.instance.name==""}
        onClick={() => {
          router.push(`/school-sign-up/phonenumber`);
        }}
      >
        Submit
      </Button>
    </Stack>
  </div>
  );
}
