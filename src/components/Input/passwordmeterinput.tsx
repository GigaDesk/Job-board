"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//PasswordMeterInput serves as an input field for passwords of a minimum length of 8 characters
export default function PasswordMeterInput(props: {
  handlechange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const minLength = 12;
  return (
    <div>
      <Stack spacing={0.5} sx={{ "--hue": Math.min(props.value.length * 10, 120) }}>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Type password in here…"
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
        <LinearProgress
          determinate
          size="sm"
          value={Math.min((props.value.length * 100) / minLength, 100)}
          sx={{
            bgcolor: "background.level3",
            color: "hsl(var(--hue) 100% 25%)",
          }}
        />
        <Typography
          level="body-xs"
          sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 100% 25%)" }}
        >
          {props.value.length < 3 && "Very weak"}
          {props.value.length >= 3 && props.value.length < 8 && "Weak"}
          {props.value.length >= 8 && props.value.length < 10 && "Strong"}
          {props.value.length >= 10 && "Very strong"}
        </Typography>
      </Stack>
    </div>
  );
}
