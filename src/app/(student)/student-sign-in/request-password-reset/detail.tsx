"use client";

import Button from "@mui/joy/Button";
import { useEffect } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "@/components/button/sendotp";
import { AuthenticationToken } from "@/state/store";
import {
  ForgotStudentPassword,
  ForgotStudentPasswordInstance,
} from "../../state/store";
import { useSnapshot } from "valtio";
import { gql } from "../../../../__generated__/gql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const REQUEST_STUDENT_PASSWORD_RESET_MUTATION = gql(`
mutation requestStudentPasswordReset($schoolid: Int!, $registration_number: String!, $phone_number: String!, $otp: String!){
  requestStudentPasswordReset(schoolid: $schoolid, registration_number: $registration_number, phone_number: $phone_number, otp: $otp)
}
  `);

export default function Detail() {
  const router = useRouter();

  const auth = useSnapshot(AuthenticationToken);
  const forgotstudentpasswordinstance = useSnapshot(
    ForgotStudentPasswordInstance
  );

  const handleChangeOtp = (event: any) => {
    ForgotStudentPasswordInstance.instance.otp = event.target.value;
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

  const [requestStudentPasswordReset, { data, loading, error }] = useMutation(
    REQUEST_STUDENT_PASSWORD_RESET_MUTATION
  );

  useEffect(() => {
    const data = window.localStorage.getItem("AuthenticationToken");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      AuthenticationToken.token = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "AuthenticationToken",
      JSON.stringify(auth.token)
    );
  }, [auth.token]);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      AuthenticationToken.token = data.requestStudentPasswordReset;
      router.push(`/student-sign-in/reset-password`);
    }
  }, [data]);

  return (
    <div className="grid">
      <Stack spacing={1}>
        <Input
          placeholder="Enter 6-digit code"
          type="number"
          onChange={handleChangeOtp}
          value={forgotstudentpasswordinstance.instance.otp}
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
          disabled={forgotstudentpasswordinstance.instance.otp.length != 6}
          onClick={(e) => {
            e.preventDefault();
            requestStudentPasswordReset({
              variables: {
                schoolid: forgotstudentpasswordinstance.instance.schoolid,
                registration_number:
                  forgotstudentpasswordinstance.instance.registrationNumber,
                phone_number:
                  forgotstudentpasswordinstance.instance.phoneNumber,
                otp: forgotstudentpasswordinstance.instance.otp,
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
          loading={loading}
        >
          Verify
        </Button>
        <SendOtp
          phonenumber={forgotstudentpasswordinstance.instance.phoneNumber}
        />
      </Stack>
    </div>
  );
}
