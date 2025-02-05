"use client";

import { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import Key from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useMutation } from "@apollo/client";
import { gql } from "../../../../__generated__/gql";
import { useSnapshot } from "valtio";
import { useRouter } from "next/navigation";
import {
  AuthenticationToken,
  ForgotStudentPasswordInstance,
} from "../../../../state/store";

import { StudentSignInInstance } from "../../state/store";

const STUDENT_LOGIN_MUTATION = gql(`
mutation studentLogin($studentlogin: StudentLogin!) {   
  studentLogin(input: $studentlogin)
}
`);

export default function Detail() {
  const router = useRouter();

  const auth = useSnapshot(AuthenticationToken);

  const studentsignininstance = useSnapshot(StudentSignInInstance);

  const forgotstudentpasswordinstance = useSnapshot(
    ForgotStudentPasswordInstance
  );

  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleChangeRegistrationNumber = (event: any) => {
    setRegistrationNumber(event.target.value);
  };

  const [studentLogin, { data, loading, error }] = useMutation(
    STUDENT_LOGIN_MUTATION
  );

  useEffect(() => {
    const data = window.localStorage.getItem("AuthenticationToken");
    if (data !== null) {
      const Parseddata: string = JSON.parse(data);
      AuthenticationToken.token = Parseddata;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "AuthenticationToken",
      JSON.stringify(auth.token)
    );
  }, [auth.token]);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      AuthenticationToken.token = data.studentLogin;
      router.push(`/student`)
    }
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem(
      "ForgotStudentPassword",
      JSON.stringify(forgotstudentpasswordinstance.instance)
    );
  }, [forgotstudentpasswordinstance.instance]);

  return (
    <div className="max-md:px-2">
      <Stack spacing={1}>
        <Input
          placeholder="Enter registration number in here…"
          onChange={handleChangeRegistrationNumber}
          value={registrationNumber}
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password in here…"
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
          onChange={handleChangePassword}
          value={password}
        />
        <div className="grid grid-cols-2">
          <p className="text-sky-600 cursor-pointer text-center">
            Forgot password?
          </p>
          <p className="text-sky-600 cursor-pointer text-center">
            Change password
          </p>
        </div>
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
          disabled={registrationNumber.length < 1 || password.length < 1}
          onClick={(e) => {
            e.preventDefault();
            studentLogin({
              variables: {
                studentlogin: {
                  schoolid: studentsignininstance.instance.schoolid,
                  registration_number: registrationNumber,
                  password: password,
                },
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map((error: any) => {
                console.log(error.message);
              });
            });
          }}
          loading={loading}
        >
          Sign in
        </Button>
      </Stack>
    </div>
  );
}
