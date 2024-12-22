"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import { SchoolSignup, SchoolSignupInstance } from "@/state/store";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

const CREATE_SCHOOL_MUTATION = gql(`
  mutation createSchool($newschool: NewSchool!) {   
    createSchool( input: $newschool ) {    
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

  // our mutation's result, data, is typed!
  const [createSchool, { data, loading, error }] = useMutation(
    CREATE_SCHOOL_MUTATION
  );

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={snap.instance.password}
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
        disabled={snap.instance.password != value}
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          createSchool({
            variables: {
              newschool: {
                name: snap.instance.name,
                phone_number: snap.instance.phoneNumber,
                password: snap.instance.password,
              },
            },
          }).catch((res) => {
            const errors = res.graphQLErrors.map((error: any) => {
              console.log(error.message);
            });
          });
        }}
      >
        Sign up
      </Button>
    </div>
  );
}
