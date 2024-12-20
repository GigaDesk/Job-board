"use client";

import InputPhoneNumber from "@/components/Input/inputphonenumber";
import { SchoolSignupInstance } from "@/state/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SchoolSignup } from "@/state/store";

export default function Detail() {
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
  }, [snap.instance]);

  return (
    <InputPhoneNumber
      handlechange={handleChange}
      disableSubmit={SchoolSignupInstance.instance.phoneNumber.length != 13}
    />
  );
}
