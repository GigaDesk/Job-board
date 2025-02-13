"use client";

import PasswordMeterInput from "@/components/Input/passwordmeterinput";
import {
  ForgotSchoolPassword,
  ForgotSchoolPasswordInstance,
} from "../../state/store";
import Button from "@mui/joy/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

export default function Detail() {
  const router = useRouter();

  const forgotschoolpasswordinstance = useSnapshot(
    ForgotSchoolPasswordInstance
  );

  const handleChangePassword = (event: any) => {
    ForgotSchoolPasswordInstance.instance.newpassword = event.target.value;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotSchoolPassword");
    if (data !== null) {
      const Parseddata: ForgotSchoolPassword = JSON.parse(data);
      ForgotSchoolPasswordInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ForgotSchoolPassword",
      JSON.stringify(forgotschoolpasswordinstance.instance)
    );
  }, [forgotschoolpasswordinstance.instance]);

  return (
    <div className="grid">
      <PasswordMeterInput
        handlechange={handleChangePassword}
        value={forgotschoolpasswordinstance.instance.newpassword}
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
        disabled={forgotschoolpasswordinstance.instance.newpassword.length < 8}
        onClick={() => {
          router.push(`/school-sign-in/confirm-new-password`);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
