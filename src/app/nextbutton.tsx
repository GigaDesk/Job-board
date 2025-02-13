"use client";

import { useSnapshot } from "valtio";
import { StudentSchoolSurveyInstance } from "@/state/store";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NextButton() {
  const snap = useSnapshot(StudentSchoolSurveyInstance);
  const [disablebutton, setDisablebutton] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (snap.instance.answer == "") {
      setDisablebutton(true);
    } else {
      setDisablebutton(false);
    }
  }, [snap.instance.answer]);

  const handleClick = () => {
    router.push(`/${snap.instance.answer}`);
  };

  return (
    <div className=" w-full grid justify-items-center">
      <div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3B0764" }}
          disabled={disablebutton}
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
