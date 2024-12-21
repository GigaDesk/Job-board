"use client";

import { SchoolSignupInstance } from "@/state/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SchoolSignup } from "@/state/store";
import { useLazyQuery } from "@apollo/client";
import { gql } from '../../../__generated__/gql' ;
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from "mui-phone-number";

const CHECK_SCHOOL_PHONENUMBER_EXISTENCE_QUERY = gql(`
  query checkphonenumber($phone_number: String!) {
    schoolPhoneNumberExists(phone_number: $phone_number) {
      verified
      unverified
    }
  }
`);

export default function Detail() {
  let phoneNumber: string;

  const snap = useSnapshot(SchoolSignupInstance);

  const handleChange = (value: any) => {
    SchoolSignupInstance.instance.phoneNumber = value;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolSignUp");
    if (data !== null) {
      const Parseddata: SchoolSignup = JSON.parse(data);
      SchoolSignupInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("SchoolSignUp", JSON.stringify(snap.instance));
    phoneNumber = snap.instance.phoneNumber;
    console.log(phoneNumber);
  }, [snap.instance]);

  const [checkPhoneNumber, { loading, error, data }] = useLazyQuery(
    CHECK_SCHOOL_PHONENUMBER_EXISTENCE_QUERY
  );

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <MuiPhoneNumber
          defaultCountry={"ke"}
          onChange={handleChange}
          onlyCountries={["ke"]}
          countryCodeEditable={false}
          value={snap.instance.phoneNumber}
        />
        <div className="text-red-600">{error?.message}</div>
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
          disabled={snap.instance.phoneNumber.length != 13}
          onClick={() =>
            checkPhoneNumber({ variables: { phone_number: phoneNumber } })
          }
          loading={loading}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
