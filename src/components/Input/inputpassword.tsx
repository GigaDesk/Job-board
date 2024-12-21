"use client";

import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function InputPassword(props: {
  handlechange: any;
  value: string;
}) {
  //let color = "#881337";
  let color = "#14962D";
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div>
      <Stack
        spacing={0.5}
        sx={{ "--hue": Math.min(props.value.length * 10, 120) }}
      >
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password in here…"
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
          value={props.value}
          onChange={props.handlechange}
        />
        <Typography
          level="body-xs"
          sx={{ alignSelf: "flex-end", color: color }}
        >
          {props.value == "" && "Empty"}
          {props.value.length >= 1 &&
            props.value != "Kisii@2024" &&
            "Incorrect"}
          {props.value == "Kisii@2024" && "Correct"}
        </Typography>
      </Stack>
    </div>
  );
}
