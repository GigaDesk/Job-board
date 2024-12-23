"use client";

import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from "mui-phone-number";
import { useEffect, useState } from "react";

export default function Detail() {
  const [phonenumber, setPhoneNumber] = useState("");

  const handleChangePhoneNumber = (value: any) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotPasswordPhoneNumber");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      setPhoneNumber(Parseddata)
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ForgotPasswordPhoneNumber", JSON.stringify(phonenumber));
  }, [phonenumber]);

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <MuiPhoneNumber
          defaultCountry={"ke"}
          onChange={handleChangePhoneNumber}
          onlyCountries={["ke"]}
          countryCodeEditable={false}
          value={phonenumber}
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
          disabled={phonenumber.length!=13}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
