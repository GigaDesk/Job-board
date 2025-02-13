"use client";

import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

//InputPasswordConfirmation compares the input password with the expected password
export default function InputPasswordConfirmation(props: {
  handlechange: any;
  expectedValue: string;
}) {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("#881337");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (event: any) => {
    props.handlechange(event);
    setValue(event.target.value);
    if (event.target.value == props.expectedValue) {
      setColor("#14962D");
    } else {
      setColor("#881337");
    }
  };

  return (
    <div>
      <Stack spacing={0.5} sx={{ "--hue": Math.min(value.length * 10, 120) }}>
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
          value={value}
          onChange={handleChange}
        />
        <Typography
          level="body-xs"
          sx={{ alignSelf: "flex-end", color: color }}
        >
          {value == "" && "Empty"}
          {value != props.expectedValue && value != "" && "Incorrect"}
          {value == props.expectedValue && "Correct"}
        </Typography>
      </Stack>
    </div>
  );
}
