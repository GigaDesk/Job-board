"use client";

import Button from "@mui/joy/Button";
import { useEffect } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "@/components/button/sendotp";
import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import { useSnapshot } from "valtio";
import {
  ForgotSchoolPassword,
  ForgotSchoolPasswordInstance,
} from "../../state/store";
import { useRouter } from "next/navigation";

const REQUEST_SCHOOL_PASSWORD_RESET_MUTATION = gql(`
   mutation requestSchoolPasswordReset($verificationinfo: verificationinfo!){
      requestSchoolPasswordReset(input: $verificationinfo)
   }
`);

export default function Detail() {
  const router = useRouter();

  const forgotschoolpasswordinstance = useSnapshot(
    ForgotSchoolPasswordInstance
  );

  const handleChangeOtp = (event: any) => {
    ForgotSchoolPasswordInstance.instance.otp = event.target.value;
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

  const [requestSchoolPasswordReset, { data, loading, error }] = useMutation(
    REQUEST_SCHOOL_PASSWORD_RESET_MUTATION
  );

  useEffect(() => {
    if (data !== undefined && data !== null) {
      window.localStorage.setItem(
        "AuthenticationToken",
        JSON.stringify(data.requestSchoolPasswordReset)
      );
      router.push(`/school-sign-in/reset-password`);
    }
  }, [data]);

  return (
    <div className="grid">
      <Stack spacing={1}>
        <Input
          placeholder="Enter 6-digit code"
          type="number"
          onChange={handleChangeOtp}
          value={forgotschoolpasswordinstance.instance.otp}
          sx={{
            "&.MuiInput-colorNeutral": {
              display: "grid",
              textAlign: "center",
            },
          }}
        />
        <div className="text-red-600 mb-4 text-center">{error?.message}</div>
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
          disabled={forgotschoolpasswordinstance.instance.otp.length != 6}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            requestSchoolPasswordReset({
              variables: {
                verificationinfo: {
                  phone_number:
                    forgotschoolpasswordinstance.instance.phoneNumber,
                  otp: forgotschoolpasswordinstance.instance.otp,
                },
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
        >
          Verify
        </Button>
        <SendOtp
          phonenumber={forgotschoolpasswordinstance.instance.phoneNumber}
        />
      </Stack>
    </div>
  );
}
