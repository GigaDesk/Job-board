"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import {
  ForgotStudentPasswordInstance,
  ForgotStudentPassword,
} from "@/state/store";
import { useSnapshot } from "valtio";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

const RESET_STUDENT_PASSWORD_MUTATION = gql(`
  mutation resetStudentPassword($new_password: String!) {   
    resetStudentPassword(new_password: $new_password){
      id
    }
  }
`);

export default function Detail() {
  const [password, setPassword] = useState("");
  const forgotstudentpasswordinstance = useSnapshot(
    ForgotStudentPasswordInstance
  );

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotStudentPassword");
    if (data !== null) {
      const Parseddata: ForgotStudentPassword = JSON.parse(data);
      ForgotStudentPasswordInstance.instance = Parseddata;
    }
  }, []);

  const [resetStudentPassword, { data, loading, error }] = useMutation(
    RESET_STUDENT_PASSWORD_MUTATION
  );

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChangePassword}
        expectedValue={forgotstudentpasswordinstance.instance.newpassword}
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
          password != forgotstudentpasswordinstance.instance.newpassword
        }
        onClick={(e) => {
          e.preventDefault();
          resetStudentPassword({
            variables: {
              new_password: forgotstudentpasswordinstance.instance.newpassword
            },
          }).catch((res) => {
            const errors = res.graphQLErrors.map((error: any) => {
              console.log(error.message);
            });
          });
        }}
        loading={loading}
      >
        Reset password
      </Button>
    </div>
  );
}
