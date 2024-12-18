"use client";

import EardrumButton from "@/components/button/button";
import { useSnapshot } from "valtio";
import { StudentSchoolSurveyInstance } from "@/state/store";
import { useState } from "react";
import { useEffect } from "react";

export default function NextButton() {
  const snap = useSnapshot(StudentSchoolSurveyInstance);
  const [disablebutton, setDisablebutton] = useState(true);

  useEffect(() => {
    if (snap.instance.answer == "") {
      setDisablebutton(true);
    } else {
      setDisablebutton(false);
    }
  }, [snap.instance.answer]);

  return (
    <div className=" w-full grid justify-items-center">
      <EardrumButton text="Next" disable={disablebutton} />
    </div>
  );
}
