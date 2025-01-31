"use client";

import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import { useMutation } from "@apollo/client";
import { gql } from "../../__generated__/gql";

const SEND_CODE_MUTATION = gql(`
   mutation sendCode($phone_number: String!) {   
    sendCode(phone_number: $phone_number) {    
      phone_number
      success
     }    
 }
`);

export default function SendOtp(props: { phonenumber: string }) {
  const [sendCode, { data, loading, error }] = useMutation(SEND_CODE_MUTATION);
  console.log(data);

  return (
    <div className="grid">
      <Stack spacing={1}>
        <div className="text-red-600 mb-4 text-center">{error?.message}</div>
        {data?.sendCode?.success ? (
          <div className="mb-4 text-gray">
            {" "}
            OTP code sent to {data?.sendCode.phone_number}{" "}
          </div>
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
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            sendCode({
              variables: {
                phone_number: props.phonenumber,
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
        >
          Didn't receive code? Resend
        </Button>
      </Stack>
    </div>
  );
}
