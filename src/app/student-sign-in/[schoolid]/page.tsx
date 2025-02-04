"use client";

import React from "react";
import Main from "./main";
import CompanyStatement from "@/components/splash/companystatement";
import { StudentSignInInstance } from "@/state/store";
import { useEffect } from "react";

import { useParams } from 'next/navigation'

export default function StudentSignIn() {

  const params = useParams()

  useEffect(() => {
      StudentSignInInstance.instance.schoolid = (params.schoolid as unknown) as number;
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
