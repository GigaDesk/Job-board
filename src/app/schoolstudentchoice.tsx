"use client";

import Choice from "../components/question/choice";
import { useSnapshot } from "valtio";
import { StudentSchoolSurveyInstance } from "@/state/store";
import { useState } from "react";
import { useEffect } from "react";

export default function SchoolStudentChoice() {
  const snap = useSnapshot(StudentSchoolSurveyInstance);
  const [checkedstudent, setCheckedStudent] = useState(false);
  const [checkedschool, setCheckedSchool] = useState(false);

  useEffect(() => {
    if (snap.instance.answer == "student") {
      setCheckedStudent(true);
      setCheckedSchool(false);
    }
    if (snap.instance.answer == "school") {
      setCheckedSchool(true);
      setCheckedStudent(false);
    }
    if (snap.instance.answer == "") {
      setCheckedSchool(false);
      setCheckedStudent(false);
    }
  }, [snap.instance.answer]);

  const handleChangeStudentChoice = () => {
    if (snap.instance.answer == "student") {
      StudentSchoolSurveyInstance.instance.answer = "";
      setCheckedStudent(false);
    } else {
      StudentSchoolSurveyInstance.instance.answer = "student";
      setCheckedStudent(true);
    }
  };

  const handleChangeSchoolChoice = () => {
    if (snap.instance.answer == "school") {
      StudentSchoolSurveyInstance.instance.answer = "";
    } else {
      StudentSchoolSurveyInstance.instance.answer = "school";
    }
  };

  return (
    <div className="grid grid-cols-2 justify-items-center ">
      <Choice
        choice="school"
        checked={checkedschool}
        handleChange={handleChangeSchoolChoice}
      />
      <Choice
        choice="student"
        checked={checkedstudent}
        handleChange={handleChangeStudentChoice}
      />
    </div>
  );
}
