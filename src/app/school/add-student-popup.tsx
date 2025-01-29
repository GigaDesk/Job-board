"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import MuiPhoneNumber from "mui-phone-number";

export default function AddStudentPopup() {
  const [name, setName] = React.useState("");

  const [registrationNumber, setRegistrationNumber] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeRegistrationNumber = (e: any) => {
    setRegistrationNumber(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleChangePhoneNumber = (value: any) => {
    setPhoneNumber(value);
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

  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-60 rounded-xl p-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <Input
              placeholder="Name"
              sx={{ fontFamily: "McLaren" }}
              onChange={handleChangeName}
              value={name}
            />
            <Input
              placeholder="Registration Number"
              sx={{ fontFamily: "McLaren" }}
              onChange={handleChangeRegistrationNumber}
              value={registrationNumber}
            />
            <Input
              placeholder="Default Password"
              sx={{ fontFamily: "McLaren" }}
              onChange={handleChangePassword}
              value={password}
            />
            <MuiPhoneNumber
              onChange={handleChangePhoneNumber}
              defaultCountry={"ke"}
              onlyCountries={["ke"]}
              countryCodeEditable={false}
              value={phoneNumber}
            />
            <Button sx={{ fontFamily: "McLaren" }} disabled={disableSubmit}>
              Submit
            </Button>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
