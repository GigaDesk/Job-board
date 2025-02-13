"use client";

import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import MuiPhoneNumber from "mui-phone-number";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import {
  ForgotSchoolPassword,
  ForgotSchoolPasswordInstance,
} from "../../state/store";
import { useRouter } from "next/navigation";

const FORGOT_SCHOOL_PASSWORD_MUTATION = gql(`
mutation forgotSchoolPassword($phone_number: String!){
  forgotSchoolPassword(phone_number: $phone_number){
    phone_number
    success
  }
}
`);

export default function Detail() {
  const router = useRouter();

  const forgotschoolpasswordinstance = useSnapshot(
    ForgotSchoolPasswordInstance
  );

  const handleChangePhoneNumber = (value: any) => {
    ForgotSchoolPasswordInstance.instance.phoneNumber = value;
  };

  useEffect(() => {
    const data = window.localStorage.getItem("ForgotSchoolPassword");
    if (data !== null) {
      const Parseddata: ForgotSchoolPassword = JSON.parse(data);
      ForgotSchoolPasswordInstance.instance = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ForgotSchoolPassword",
      JSON.stringify(forgotschoolpasswordinstance.instance)
    );
  }, [forgotschoolpasswordinstance.instance]);

  const [forgotSchoolPassword, { loading, error, data }] = useMutation(
    FORGOT_SCHOOL_PASSWORD_MUTATION
  );

  useEffect(() => {
    if (data?.forgotSchoolPassword?.success === true) {
      router.push(`/school-sign-in/request-password-reset`);
    }
  }, [data]);

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <MuiPhoneNumber
          defaultCountry={"ke"}
          onChange={handleChangePhoneNumber}
          onlyCountries={["ke"]}
          countryCodeEditable={false}
          value={forgotschoolpasswordinstance.instance.phoneNumber}
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
          disabled={
            forgotschoolpasswordinstance.instance.phoneNumber.length != 13
          }
          onClick={(e) => {
            e.preventDefault();
            forgotSchoolPassword({
              variables: {
                phone_number: forgotschoolpasswordinstance.instance.phoneNumber,
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
