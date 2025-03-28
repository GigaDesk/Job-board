"use client";

import { SchoolSignup, SchoolSignupInstance } from "../../state/store";
import { useSnapshot } from "valtio";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "../../../../components/button/sendotp";
import { useMutation } from "@apollo/client";
import { gql } from "../../../../__generated__/gql";
import { useRouter } from "next/navigation";

const VERIFY_EMPLOYER_MUTATION = gql(`
  mutation verifyEmployer ($verificationinfo: verificationinfo!) {   
  verifyEmployer(input: $verificationinfo) {    
    id
   }    
}
`);

export default function Detail() {
  const router = useRouter();

  const schoolsignupinstance = useSnapshot(SchoolSignupInstance);

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    window.localStorage.setItem(
      "SchoolSignUp",
      JSON.stringify(schoolsignupinstance.instance)
    );
  }, [schoolsignupinstance.instance]);

  const [verifyEmployer, { data, loading, error }] = useMutation(
    VERIFY_EMPLOYER_MUTATION
  );

  useEffect(() => {
    if (data !== null && data !==undefined) {
      router.push(`/employer-sign-in`);
    }
  }, [data, router]);

  return (
    <div className="grid">
      <Stack spacing={1}>
        <Input
          placeholder="Enter 6-digit code"
          type="number"
          onChange={handleChange}
          value={value}
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
          disabled={value.length != 6}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            verifyEmployer({
              variables: {
                verificationinfo: {
                  phone_number: schoolsignupinstance.instance.phoneNumber,
                  otp: value,
                },
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map(() => {
                console.log(errors.message);
              });
            });
          }}
        >
          Verify
        </Button>
        <SendOtp phonenumber={schoolsignupinstance.instance.phoneNumber} />
      </Stack>
    </div>
  );
}
