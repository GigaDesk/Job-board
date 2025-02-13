"use client";

import React from "react";
import Main from "./main";
import CompanyStatement from "@/components/splash/companystatement";
import {
  ForgotStudentPasswordInstance,
} from "../../state/store";
import { useEffect } from "react";

import { useParams } from "next/navigation";
import { StudentSignInInstance } from "../../state/store";

export default function StudentSignIn() {
  const params = useParams();

  useEffect(() => {
    const schoolid = params.schoolid as unknown as number;
    StudentSignInInstance.instance.schoolid = schoolid;
    ForgotStudentPasswordInstance.instance.schoolid = schoolid;
  }, [params]);

  return (
    <div
      className="min-h-screen grid content-center bg-white relative text-black"
      style={{ fontFamily: "Inter" }}
    >
      <main className="h-96 grid content-center justify-items-center">
        <Main />
      </main>
      <footer className="absolute bottom-0 w-full pb-4">
        <CompanyStatement />
      </footer>
    </div>
  );
}
