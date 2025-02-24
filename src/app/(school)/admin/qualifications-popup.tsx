"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import TextField from "@mui/material/TextField";
import SelectEducationLevel from "./selecteducationlevel";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";
import { useSnapshot } from "valtio";
import { Qualifications } from "../state/store";
import { Input } from "@mui/joy";

const ADD_STUDENT_MUTATION = gql(`
  mutation AddStudent($newstudents: [NewStudent!]!) {   
    AddStudents( students: $newstudents ) {    
      name
     }    
 }
`);
export default function QualificationsPopup() {
  const qualifications = useSnapshot(Qualifications);

  const [name, setName] = React.useState("");

  const [registrationNumber, setRegistrationNumber] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeRegistrationNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegistrationNumber(e.target.value);
  };

  const handleChangeQualification = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    Qualifications.qualifications[index] = e.target.value;
  };

  const addMoreQualifications = () => {
    Qualifications.qualifications = [...Qualifications.qualifications, ""];
  };

  const logger = () => {
    console.log(qualifications.qualifications);
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

  const [addStudent, { loading, error }] = useMutation(ADD_STUDENT_MUTATION);

  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-70 rounded-xl p-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <SelectEducationLevel />
            <TextField placeholder="Years of experience" type="number" size="small"/>
            <div className="overflow-auto h-[200px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
              {qualifications.qualifications.map((qualification, index) => {
                return (
                  <TextField
                    placeholder="Requirement"
                    sx={{ fontFamily: "McLaren", marginTop: '10px' }}
                    onChange={(event) =>
                      handleChangeQualification(event, index)
                    }
                    value={qualification}
                    maxRows={4}
                    size="small"
                    multiline
                    key={index}
                  />
                );
              })}
            </div>
            <div className="px-16 grid justify-items-center">
              <button
                className="hover:text-bright-blue rounded-full"
                onClick={addMoreQualifications}
              >
                Add more
              </button>
            </div>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
