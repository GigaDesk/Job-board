"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import MuiPhoneNumber from 'mui-phone-number';

export default function AddStudentPopup() {

  const[phoneNumber, setPhoneNumber] = React.useState("")

  const handleChange = (value: any) => {
    setPhoneNumber(value);
  };

  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-60 rounded-xl p-4 text-sm"
          style={{ fontFamily: "McLaren" }}
        >
          <Stack spacing={1}>
            <Input placeholder="Name" sx={{ fontFamily: "McLaren" }} />
            <Input
              placeholder="Registration Number"
              sx={{ fontFamily: "McLaren" }}
            />
            <Input
              placeholder="Default Password"
              sx={{ fontFamily: "McLaren" }}
            />
             <MuiPhoneNumber onChange={handleChange} defaultCountry={"ke"} onlyCountries={["ke"]} countryCodeEditable={false} value={phoneNumber}/>
            <Button sx={{ fontFamily: "McLaren" }}>Submit</Button>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
