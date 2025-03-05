"use client";

import { SchoolSignupInstance } from "../../state/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SchoolSignup } from "../../state/store";
import { useLazyQuery } from "@apollo/client";
import { gql } from "../../../../__generated__/gql";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from "mui-phone-number";
import { useRouter } from "next/navigation";

const CHECK_SCHOOL_PHONENUMBER_EXISTENCE_QUERY = gql(`
  query checkphonenumber($phone_number: String!) {
    schoolPhoneNumberExists(phone_number: $phone_number) {
      verified
      unverified
    }
  }
`);

export default function Detail() {
  const router = useRouter();

  const schoolsignupinstance = useSnapshot(SchoolSignupInstance);

  const handleChange = (e: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    SchoolSignupInstance.instance.phoneNumber = e as string;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("SchoolSignUp");
    if (data !== null) {
      const Parseddata: SchoolSignup = JSON.parse(data);
      SchoolSignupInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "SchoolSignUp",
      JSON.stringify(schoolsignupinstance.instance)
    );
  }, [schoolsignupinstance.instance]);

  const [checkPhoneNumber, { loading, error, data }] = useLazyQuery(
    CHECK_SCHOOL_PHONENUMBER_EXISTENCE_QUERY
  );

  useEffect(() => {
    if (
      data?.schoolPhoneNumberExists.verified === false &&
      data.schoolPhoneNumberExists.unverified === false
    ) {
      router.push(`/school-sign-up/password`);
    }
  }, [data, router]);

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <MuiPhoneNumber
          defaultCountry={"ke"}
          onChange={handleChange}
          onlyCountries={["ke"]}
          countryCodeEditable={false}
          value={schoolsignupinstance.instance.phoneNumber}
        />
        <div className="text-red-600">{error?.message}</div>
        {data?.schoolPhoneNumberExists.unverified ? (
          <div className="text-red-600">
            Phone number exists but is unverified. Verify
          </div>
        ) : null}
        {data?.schoolPhoneNumberExists.verified ? (
          <div className="text-red-600"> Phone number already exists </div>
        ) : null}
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
          disabled={schoolsignupinstance.instance.phoneNumber.length != 13}
          onClick={() =>
            checkPhoneNumber({ variables: { phone_number: schoolsignupinstance.instance.phoneNumber } })
          }
          loading={loading}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
