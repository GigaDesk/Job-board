"use client";

import * as React from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

export default function InputName(props: {
  placeholder: string;
  value: string;
  handlechange: any;
  disableSubmit: boolean;
}) {
    
  return (
    <div>
      <Stack spacing={1}>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handlechange}
        />
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
          disabled={props.disableSubmit}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
