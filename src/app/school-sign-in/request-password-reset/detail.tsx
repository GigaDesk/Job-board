"use client";

import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "@/components/button/sendotp";
import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";

const REQUEST_SCHOOL_PASSWORD_RESET_MUTATION = gql(`
   mutation requestSchoolPasswordReset($verificationinfo: verificationinfo!){
      requestSchoolPasswordReset(input: $verificationinfo)
   }
`);

export default function Detail() {
  const [otp, setOtp] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleChange = (event: any) => {
    setOtp(event.target.value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotPasswordPhoneNumber");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      setPhoneNumber(Parseddata);
    }
  }, []);

  const [requestSchoolPasswordReset, { data, loading, error }] = useMutation(
    REQUEST_SCHOOL_PASSWORD_RESET_MUTATION
  );

  useEffect(() => {
    if (data !== undefined && data !== null) {
      window.localStorage.setItem(
        "AuthenticationToken",
        JSON.stringify(data.requestSchoolPasswordReset)
      );
    }
  }, [data]);

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
          disabled={otp.length != 6}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            requestSchoolPasswordReset({
              variables: {
                verificationinfo: {
                  phone_number: phonenumber,
                  otp: otp,
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
        <SendOtp phonenumber={phonenumber} />
      </Stack>
    </div>
  );
}
