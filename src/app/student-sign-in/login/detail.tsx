"use client";

import { useState } from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Detail() {
  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleChangeRegistrationNumber = (event: any) => {
    setRegistrationNumber(event.target.value);
  };

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <Input
          placeholder="Enter registration number in here…"
          onChange={handleChangeRegistrationNumber}
          value={registrationNumber}
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
          <p className="text-sky-600 cursor-pointer text-center">
            Forgot password?
          </p>
          <p className="text-sky-600 cursor-pointer text-center">
            Change password
          </p>
        </div>
        <div className="text-red-600 mb-4 text-center"></div>
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
          disabled={registrationNumber.length < 1 || password.length < 1}
        >
          Sign in
        </Button>
      </Stack>
    </div>
  );
}
