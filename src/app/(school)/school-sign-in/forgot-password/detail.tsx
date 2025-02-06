"use client";

import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from "mui-phone-number";
import { useEffect, useState } from "react";

const FORGOT_SCHOOL_PASSWORD_MUTATION = gql(`
mutation forgotSchoolPassword($phone_number: String!){
  forgotSchoolPassword(phone_number: $phone_number){
    phone_number
    success
  }
}
`);

export default function Detail() {
  const [phonenumber, setPhoneNumber] = useState("");

  const handleChangePhoneNumber = (value: any) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotPasswordPhoneNumber");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      setPhoneNumber(Parseddata);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ForgotPasswordPhoneNumber",
      JSON.stringify(phonenumber)
    );
  }, [phonenumber]);

  const [forgotSchoolPassword, { loading, error, data }] = useMutation(
    FORGOT_SCHOOL_PASSWORD_MUTATION
  );

  console.log(data);

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
        <div className="text-red-600 mb-4 text-center">{error?.message}</div>
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
          onClick={(e) => {
            e.preventDefault();
            forgotSchoolPassword({
              variables: {
                phone_number: phonenumber,
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
          loading={loading}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
