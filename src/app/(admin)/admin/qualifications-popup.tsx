"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { JobInstance } from "../state/store";
import { useSnapshot } from "valtio";
import Button from "@mui/joy/Button";

export default function QualificationsPopup() {
  const jobinstance = useSnapshot(JobInstance);

  const handleChangeQualification = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (JobInstance.instance.requirements != undefined) {
      JobInstance.instance.requirements[index] = e.target.value;
    }
  };

  const addMoreQualifications = () => {
    if (jobinstance.instance.requirements != undefined) {
      JobInstance.instance.requirements = [
        ...jobinstance.instance.requirements,
        "",
      ];
    }
  };

  const removeQualifications = (index: number) => {
    if (jobinstance.instance.requirements != undefined) {
      JobInstance.instance.requirements.splice(index, 1); // Remove 1 element at the specified index
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {jobinstance.instance.requirements?.map((qualification, index) => {
          return (
            <div className="grid grid-cols-[1fr_100px]" key={index}>
              <TextField
                placeholder="Requirement"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={(event) => handleChangeQualification(event, index)}
                value={qualification}
                maxRows={4}
                size="small"
                multiline
              />
              <div className="grid content-end">
                <Button
                  variant="plain"
                  onClick={() => {
                    removeQualifications(index);
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-16 py-2 grid justify-items-center">
        <button
          className="hover:text-bright-blue rounded-full"
          onClick={addMoreQualifications}
        >
          Add more requirements
        </button>
      </div>
    </div>
  );
}
