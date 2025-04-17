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
import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { ToLocalDate } from "@/utils/time-manipulation/toLocal";

const FIND_UNAPPROVEDJOB_QUERY = gql(`
    query findUnapprovedJob($id: Int!){
      findUnapprovedJob(id: $id){
        id
        title
        industry
        deadline
        description
        requirements
        level
        location
        educationLevel
        experience
      }
    }
  `);

const EDIT_UNAPPROVED_JOB_MUTATION = gql(`
  mutation editUnapprovedJob($id: Int!, $newjob: NewJob!) {   
    editUnapprovedJob( id: $id, input: $newjob ) {    
      id
     }    
 }
`);
export default function EditUnApprovedJob() {
  const params = useParams();

  const { data: UnApprovedJob } = useQuery(FIND_UNAPPROVEDJOB_QUERY, {
    variables: { id: params.job as unknown as number }, // Pass the id variable
  });

  React.useEffect(() => {
    if (UnApprovedJob !== undefined) {
      JobInstance.instance.title = UnApprovedJob.findUnapprovedJob.title;
      JobInstance.instance.industry = UnApprovedJob.findUnapprovedJob
        .industry as string;
      JobInstance.instance.educationLevel = UnApprovedJob.findUnapprovedJob
        .educationLevel as string;
      JobInstance.instance.description =
        UnApprovedJob.findUnapprovedJob.description;
      JobInstance.instance.deadline = dayjs(
        ToLocalDate(UnApprovedJob.findUnapprovedJob.deadline)
      ).toISOString();
      JobInstance.instance.location = UnApprovedJob.findUnapprovedJob
        .location as string;
      JobInstance.instance.level = UnApprovedJob.findUnapprovedJob
        .level as string;
      JobInstance.instance.requirements = [
        ...(UnApprovedJob.findUnapprovedJob.requirements as string[]),
      ];
      JobInstance.instance.experience = UnApprovedJob.findUnapprovedJob
        .experience as number;
    }
  }, [UnApprovedJob]);

  const [disableSubmit, setDisableSubmit] = React.useState(true);

  const [message, setMessage] = React.useState("Submit");

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

  const [editUnapprovedJob, { data, loading, error }] = useMutation(
    EDIT_UNAPPROVED_JOB_MUTATION
  );

  React.useEffect(() => {
    if (data !== undefined) {
      setDisableSubmit(true);
      setMessage("Submission Successful");
    }
  }, [data]);

  React.useEffect(() => {
    setMessage("Submit");
  }, [jobinstance.instance]);

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

  React.useEffect(() => {
    console.log(jobinstance.instance.level);
    console.log(jobinstance.instance.educationLevel);
  }, [jobinstance.instance]);

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
        <Button
          disabled={disableSubmit}
          sx={{ fontFamily: "McLaren" }}
          loading={loading}
          onClick={(e) => {
            e.preventDefault();
            editUnapprovedJob({
              variables: {
                id: UnApprovedJob?.findUnapprovedJob.id as number,
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
                },
              },
            }).catch((res) => {
              const errors = res.graphQLErrors.map(() => {
                console.log(errors.message);
              });
            });
          }}
        >
          {message}
        </Button>
        <div className="text-red-600">{error?.message}</div>
      </Stack>
    </div>
  );
}
