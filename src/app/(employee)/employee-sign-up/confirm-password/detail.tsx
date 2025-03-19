"use client";

import InputPasswordConfirmation from "@/components/Input/inputpasswordconfirmation";
import { SchoolSignup, SchoolSignupInstance } from "../../state/store";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { useMutation } from "@apollo/client";
import { gql } from "../../../../__generated__/gql";
import { useRouter } from "next/navigation";

const CREATE_EMPLOYEE_MUTATION = gql(`
  mutation createEmployee($newemployee: NewEmployee!) {   
    createEmployee( input: $newemployee ) {    
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

  // our mutation's result, data, is typed!
  const [createEmployee, { data, loading, error }] = useMutation(
    CREATE_EMPLOYEE_MUTATION
  );

  useEffect(() => {
    if (data !== null && data !== undefined) {
      router.push(`/employee-sign-up/verify-phonenumber`);
    }
  }, [data, router]);

  return (
    <div className="grid">
      <InputPasswordConfirmation
        handlechange={handleChange}
        expectedValue={schoolsignupinstance.instance.password}
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
        disabled={schoolsignupinstance.instance.password != value}
        loading={loading}
        onClick={(e) => {
          e.preventDefault();
          createEmployee({
            variables: {
              newemployee: {
                name: schoolsignupinstance.instance.name,
                phone_number: schoolsignupinstance.instance.phoneNumber,
                password: schoolsignupinstance.instance.password,
              },
            },
          }).catch((res) => {
            const errors = res.graphQLErrors.map(() => {
              console.log(errors.message);
            });
          });
        }}
      >
        Sign up
      </Button>
    </div>
  );
}
