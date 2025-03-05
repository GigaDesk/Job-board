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

const FORGOT_ADMIN_PASSWORD_MUTATION = gql(`
mutation forgotAdminPassword($phone_number: String!){
  forgotAdminPassword(phone_number: $phone_number){
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

  const handleChangePhoneNumber = (e: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    ForgotSchoolPasswordInstance.instance.phoneNumber = e as string;
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

  const [forgotAdminPassword, { loading, error, data }] = useMutation(
    FORGOT_ADMIN_PASSWORD_MUTATION
  );

  useEffect(() => {
    if (data?.forgotAdminPassword?.success === true) {
      router.push(`/admin-sign-in/request-password-reset`);
    }
  }, [data, router]);

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
            forgotAdminPassword({
              variables: {
                phone_number: forgotschoolpasswordinstance.instance.phoneNumber,
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map(() => {
                console.log(errors.message);
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
