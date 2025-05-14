"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import TextField from "@mui/material/TextField";
import SelectSmall from "./selectsenioritylevel";
import { useMutation } from "@apollo/client";
import { gql } from "../../../__generated__/gql";
import SelectEducationLevel from "./selecteducationlevel";
import SelectIndustry from "./selectindustry";
import QualificationsPopup from "./qualifications-popup";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { JobInstance } from "../state/store";
import { useSnapshot } from "valtio";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useRouter } from "next/navigation";

const CREATE_JOB_MUTATION = gql(`
  mutation createJob($newjob: NewJob!) {   
    createJob( input: $newjob ) {    
      id
     }    
 }
`);
export default function AddStudentPopup() {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/job-preview`);
  };

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  const jobinstance = useSnapshot(JobInstance);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    JobInstance.instance.title = e.target.value;
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    JobInstance.instance.description = e.target.value;
  };

  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    JobInstance.instance.location = e.target.value;
  };

  const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    JobInstance.instance.experience = e.target.value as unknown as number;
  };

  const handleChangeDeadline = (value: dayjs.Dayjs | null) => {
    if (value != null) {
      JobInstance.instance.deadline = value.toISOString();
    }
  };

  const handleChangeExternalApplicationLink = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.externalApplicationLink = e.target.value;
  };

  const handleChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    JobInstance.instance.companyName = e.target.value;
  };

  const handleChangeCompanyLocation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.companyLocation = e.target.value;
  };

  const handleChangeCompanyIndustry = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.companyIndustry = e.target.value;
  };

  const handleChangeCompanyDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.companyDescription = e.target.value;
  };

  const handleChangeMinimumEmployees = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.minimumEmployees = e.target.value as unknown as number;
  };

  const handleChangeMaximumEmployees = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    JobInstance.instance.maximumEmployees = e.target.value as unknown as number;
  };

  const handleStringValue = (s: string) => {
    if (s == "") {
      return undefined;
    } else {
      return s;
    }
  };

  const handleNumberStringValue = (s: number | "") => {
    if (s == "") {
      return undefined;
    } else if (s < 1) {
      return undefined;
    } else {
      return s;
    }
  };

  const handleStringArrayValue = (s: string[]) => {
    const finalArray: string[] = [];
    for (let i = 0; i < s.length; i++) {
      // append non empty strings
      if (s[i] !== "") {
        finalArray.push(s[i]);
      }
    }
    if (finalArray.length === 0) {
      return undefined;
    } else {
      return finalArray;
    }
  };

  React.useEffect(() => {
    if (
      jobinstance.instance.industry !== "" &&
      jobinstance.instance.description !== "" &&
      jobinstance.instance.title !== ""
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [jobinstance.instance]);

  const [createJob, { loading, error }] = useMutation(CREATE_JOB_MUTATION);

  return (
    <div className="p-4 text-sm" style={{ fontFamily: "McLaren" }}>
      <Stack spacing={1}>
        <div className="grid md:grid-cols-3 gap-4">
          <TextField
            placeholder="Title"
            onChange={handleChangeTitle}
            value={jobinstance.instance.title}
            size="small"
          />
          <SelectIndustry />
          <TextField
            placeholder="Location"
            onChange={handleChangeLocation}
            value={jobinstance.instance.location}
            sx={{ fontFamily: "McLaren" }}
            size="small"
          />
        </div>
        <TextField
          placeholder="Description"
          sx={{ fontFamily: "McLaren" }}
          onChange={handleChangeDescription}
          value={jobinstance.instance.description}
          maxRows={4}
          size="small"
          multiline
        />
        <div className="grid md:grid-cols-3 gap-2">
          <SelectSmall />
          <TextField
            placeholder="Years of experience"
            onChange={handleChangeExperience}
            value={jobinstance.instance.experience}
            type="number"
            size="small"
          />
          <SelectEducationLevel />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="Pick a deadline">
            <MobileDatePicker
              onChange={handleChangeDeadline}
              value={
                jobinstance.instance.deadline == null
                  ? null
                  : dayjs(jobinstance.instance.deadline)
              }
            />
          </DemoItem>
        </LocalizationProvider>
        <QualificationsPopup />
        <TextField
          placeholder="External Application Link"
          onChange={handleChangeExternalApplicationLink}
          value={jobinstance.instance.externalApplicationLink}
          size="small"
        />
        <TextField
          placeholder="Company Name"
          onChange={handleChangeCompanyName}
          value={jobinstance.instance.companyName}
          size="small"
        />
        <TextField
          placeholder="Company Location"
          onChange={handleChangeCompanyLocation}
          value={jobinstance.instance.companyLocation}
          size="small"
        />
        <TextField
          placeholder="Company Industry"
          onChange={handleChangeCompanyIndustry}
          value={jobinstance.instance.companyIndustry}
          size="small"
        />
        <TextField
          placeholder="Company Description"
          onChange={handleChangeCompanyDescription}
          value={jobinstance.instance.companyDescription}
          maxRows={4}
          size="small"
        />
        <TextField
          placeholder="Minimum Number of Employees"
          onChange={handleChangeMinimumEmployees}
          value={jobinstance.instance.minimumEmployees}
          type="number"
          size="small"
        />
        <TextField
          placeholder="Maximum Number of Employees"
          onChange={handleChangeMaximumEmployees}
          value={jobinstance.instance.maximumEmployees}
          type="number"
          size="small"
        />
         <Button onClick={handleClick}>Preview</Button>
        <Button
          disabled={disableSubmit}
          sx={{ fontFamily: "McLaren" }}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            createJob({
              variables: {
                newjob: {
                  title: jobinstance.instance.title,
                  description: jobinstance.instance.description,
                  location: handleStringValue(jobinstance.instance.location),
                  level: handleStringValue(jobinstance.instance.level),
                  industry: handleStringValue(jobinstance.instance.industry),
                  deadline: jobinstance.instance.deadline,
                  educationLevel: handleStringValue(
                    jobinstance.instance.educationLevel
                  ),
                  experience: handleNumberStringValue(
                    jobinstance.instance.experience
                  ),
                  minSalary: jobinstance.instance.minSalary,
                  maxSalary: jobinstance.instance.maxSalary,
                  requirements: handleStringArrayValue(
                    JobInstance.instance.requirements
                  ),
                  jobUrl: handleStringValue(
                    jobinstance.instance.externalApplicationLink
                  ),
                  companyName: handleStringValue(
                    jobinstance.instance.companyName
                  ),
                  companyLocation: handleStringValue(
                    jobinstance.instance.companyLocation
                  ),
                  companyIndustry: handleStringValue(
                    jobinstance.instance.industry
                  ),
                  companyDescription: handleStringValue(
                    jobinstance.instance.companyDescription
                  ),
                  MinimumEmployees: handleNumberStringValue(
                    jobinstance.instance.minimumEmployees
                  ),
                  MaximumEmployees: handleNumberStringValue(
                    jobinstance.instance.maximumEmployees
                  ),
                },
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map(() => {
                console.log(errors.message);
              });
            });
          }}
        >
          Submit
        </Button>
        <div className="text-red-600">{error?.message}</div>
      </Stack>
    </div>
  );
}
