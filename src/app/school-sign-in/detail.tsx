"use client";

import { useState } from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MuiPhoneNumber from "mui-phone-number";

export default function Detail() {
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangePhoneNumber = (value: any) => {
    setPhoneNumber(value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value)
  }


  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <MuiPhoneNumber
          onChange={handleChangePhoneNumber}
          defaultCountry={"ke"}
          onlyCountries={["ke"]}
          countryCodeEditable={false}
          value={phonenumber}
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password in here…"
          startDecorator={<Key />}
          endDecorator={
            showPassword ? (
              <div className="cursor-pointer">
                <VisibilityOff onClick={handleClickShowPassword} />
              </div>
            ) : (
              <div className="cursor-pointer">
                <Visibility onClick={handleClickShowPassword} />
              </div>
            )
          }
          onChange={handleChangePassword}
          value={password}
        />
        <div className="grid grid-cols-2">
        <p className="text-sky-600 cursor-pointer text-center">Forgot password?</p>
        <p className="text-sky-600 cursor-pointer text-center">Create an account</p>
        </div>
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
          disabled={phonenumber.length != 13}
        >
          Sign in
        </Button>
      </Stack>
    </div>
  );
}
