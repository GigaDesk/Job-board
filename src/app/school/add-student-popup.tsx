"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function AddStudentPopup() {
  return (
    <div className="shadow-xl">
      <Card sx={{ backgroundColor: "#F0F4F9" }}>
        <div
          className="w-80 h-52 rounded-xl p-4 text-sm"
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
            <Button sx={{ fontFamily: "McLaren" }}>Submit</Button>
          </Stack>
        </div>
      </Card>
    </div>
  );
}
