"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import BasicDatePicker from "./selectdate";
import Button from "@mui/joy/Button";
import TextField from '@mui/material/TextField';
import SelectSmall from "./selectlevel";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

const ADD_STUDENT_MUTATION = gql(`
  mutation AddStudent($newstudents: [NewStudent!]!) {   
    AddStudents( students: $newstudents ) {    
      name
     }    
 }
`);
export default function AddStudentPopup() {
  const [name, setName] = React.useState("");

  const [registrationNumber, setRegistrationNumber] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeRegistrationNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationNumber(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangePhoneNumber = (e: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPhoneNumber(e as string);
  };

  React.useEffect(() => {
    if (
      name.length > 0 &&
      registrationNumber.length > 0 &&
      password.length > 8 &&
      phoneNumber.length == 13
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [name, registrationNumber, password, phoneNumber]);

  const [addStudent, { loading, error }] =
    useMutation(ADD_STUDENT_MUTATION);

  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-70 rounded-xl p-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <TextField
              placeholder="Title"
              onChange={handleChangeName}
              value={name}
              size="small"
            />
            <TextField
              placeholder="Description"
              sx={{ fontFamily: "McLaren" }}
              onChange={handleChangeRegistrationNumber}
              value={registrationNumber}
              maxRows={4}
              size="small"
              multiline
            />
            <TextField
              placeholder="Qualification"
              sx={{ fontFamily: "McLaren" }}
              onChange={handleChangePassword}
              value={password}
              maxRows={4}
              size="small"
              multiline
            />
            <SelectSmall />
            <TextField
              placeholder="Location"
              sx={{ fontFamily: "McLaren" }}
              size="small"
            />
            <BasicDatePicker />
            <Button
              sx={{ fontFamily: "McLaren" }}
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                addStudent({
                  variables: {
                    newstudents: [
                      {
                        name: name,
                        registration_number: registrationNumber,
                        password: password,
                        phone_number: phoneNumber,
                      },
                    ],
                  },
                }).catch((res) => {
                  const errors = res.graphQLErrors.map(() => {
                    console.log(errors.message);
                  });
                });
              }}
            >
              Submit
            </Button>
            <div className="text-red-600">{error?.message}</div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
