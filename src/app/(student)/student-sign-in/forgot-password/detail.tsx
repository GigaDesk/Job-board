"use client";

import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { useRouter } from "next/navigation";
import {
  ForgotStudentPasswordInstance,
  ForgotStudentPassword,
} from "@/state/store";
import { gql } from "../../../../__generated__/gql";
import { useMutation } from "@apollo/client";

const FORGOT_STUDENT_PASSWORD_MUTATION = gql(`
mutation forgotStudentPassword($schoolid: Int!, $registration_number: String!){
  forgotStudentPassword(schoolid: $schoolid, registration_number: $registration_number){
    phone_number
    success
  }
}
  `);

export default function Detail() {
  const router = useRouter();

  const forgotstudentpasswordinstance = useSnapshot(
    ForgotStudentPasswordInstance
  );

  const handleChangeRegistrationNumber = (event: any) => {
    ForgotStudentPasswordInstance.instance.registrationNumber =
      event.target.value;
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

  const [forgotStudentPassword, { data, loading, error }] = useMutation(
    FORGOT_STUDENT_PASSWORD_MUTATION
  );

  useEffect(() => {
    if (data?.forgotStudentPassword?.phone_number != undefined) {
      ForgotStudentPasswordInstance.instance.phoneNumber =
        data?.forgotStudentPassword?.phone_number;
    }
    if (
      data?.forgotStudentPassword?.success !== undefined &&
      data.forgotStudentPassword.success === true
    ) {
      router.push(`/student-sign-in/request-password-reset`);
    }
  }, [data]);

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <Input
          placeholder="Enter registration number in here…"
          onChange={handleChangeRegistrationNumber}
          value={forgotstudentpasswordinstance.instance.registrationNumber}
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
          disabled={
            forgotstudentpasswordinstance.instance.registrationNumber.length < 1
          }
          onClick={(e) => {
            e.preventDefault();
            forgotStudentPassword({
              variables: {
                schoolid: forgotstudentpasswordinstance.instance.schoolid,
                registration_number:
                  forgotstudentpasswordinstance.instance.registrationNumber,
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
          loading={loading}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
