"use client";

import { SchoolSignup, SchoolSignupInstance } from "@/state/store";
import { useSnapshot } from "valtio";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import SendOtp from "./sendotp";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

const VERIFY_SCHOOL_MUTATION = gql(`
  mutation verifySchool ($verificationinfo: verificationinfo!) {   
  verifySchool(input: $verificationinfo) {    
    id
    createdAt
    updatedAt
    deletedAt
    name
    phone_number
    password
    badge
    Website
   }    
}
`);

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

  const [verifySchool, { data, loading, error }] = useMutation(
    VERIFY_SCHOOL_MUTATION
  );

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
            verifySchool({
              variables: {
                verificationinfo: {
                  phone_number: snap.instance.phoneNumber,
                  otp: value,
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
        <SendOtp />
      </Stack>
    </div>
  );
}
