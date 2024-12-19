"use client";

import InputName from "@/components/Input/inputname";
import { SchoolSignupInstance } from "@/state/store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SchoolSignup } from "@/state/store";

export default function Detail() {
  const snap = useSnapshot(SchoolSignupInstance);

  const handleChange = (e: any) => {
    SchoolSignupInstance.instance.name = e.target.value;
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
      JSON.stringify(snap.instance)
    );
  }, [snap.instance]);
  
  return (
    <InputName
      placeholder="Type school's name here..."
      value={snap.instance.name}
      handlechange={handleChange}
      disableSubmit={SchoolSignupInstance.instance.name==""}
    />
  );
}
