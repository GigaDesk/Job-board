"use client";

import { gql } from "@/__generated__/gql";
import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import { SchoolPasswordResetValue } from "@/state/store";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

const RESET_SCHOOL_PASSWORD_MUTATION = gql(`
   mutation resetSchoolPassword($new_password: String!){
    resetSchoolPassword(new_password: $new_password){
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
  const snap = useSnapshot(SchoolPasswordResetValue);

  const [password, setPassword] = useState("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolPasswordResetValue");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      SchoolPasswordResetValue.password = Parseddata;
    }
  }, []);

  const [resetSchoolPassword, { loading, error, data }] = useMutation(
    RESET_SCHOOL_PASSWORD_MUTATION
  );

  console.log(data);

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={snap.password}
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
        disabled={password != snap.password}
        onClick={(e) => {
          e.preventDefault();
          resetSchoolPassword({
            variables: {
              new_password: snap.password,
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
