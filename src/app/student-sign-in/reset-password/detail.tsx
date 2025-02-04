"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import Button from "@mui/joy/Button";
import { useEffect } from "react";
import {
  ForgotStudentPasswordInstance,
  ForgotStudentPassword,
} from "@/state/store";
import { useSnapshot } from "valtio";

export default function Detail() {
  const forgotstudentpasswordinstance = useSnapshot(
    ForgotStudentPasswordInstance
  );

  const handleChangePassword = (event: any) => {
    ForgotStudentPasswordInstance.instance.newpassword = event.target.value;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotStudentPassword");
    if (data !== null) {
      const Parseddata: ForgotStudentPassword = JSON.parse(data);
      ForgotStudentPasswordInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ForgotStudentPassword",
      JSON.stringify(forgotstudentpasswordinstance.instance)
    );
  }, [forgotstudentpasswordinstance.instance]);

  return (
    <div className="grid">
      <PasswordMeterInput
        handlechange={handleChangePassword}
        value={forgotstudentpasswordinstance.instance.newpassword}
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
        disabled={forgotstudentpasswordinstance.instance.newpassword.length < 8}
      >
        Submit
      </Button>
    </div>
  );
}
