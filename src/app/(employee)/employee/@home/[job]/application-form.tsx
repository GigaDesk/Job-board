"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import TextField from "@mui/material/TextField";
import SelectEducationLevel from "../../selecteducationlevel";
import { useSnapshot } from "valtio";
import { ApplicationInstance } from "@/app/(employee)/state/store";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase/init";
import { gql } from "@/__generated__/gql";
import { useMutation, useQuery } from "@apollo/client";

const GET_EMPLOYEE_PROFILE = gql(`
  query getEmployeeProfile{
    getEmployeeProfile{
      id
    }
  }
    `);

const CREATE_APPLICATION_MUTATION = gql(`
  mutation createApplication($newapplication: NewApplication!) {   
    createApplication( input: $newapplication ) {    
      id
     }    
 }
`);

export interface ApplicationFormProps {
  job_id: number;
}

export default function ApplicationForm(props: ApplicationFormProps) {
  const { data: employeeData } = useQuery(GET_EMPLOYEE_PROFILE);

  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const [message, setMessage] = React.useState("Submit");
  const [uploadError, setUploadError] = React.useState("");
  const [immediateLoading, setImmediateLoading] = React.useState(false);

  const [coverLetterFile, setCoverLetterFile] = React.useState<File>();
  const [coverLetterDownloadURL, setCoverLetterDownloadURL] =
    React.useState("");

  const [resumeeFile, setResumeeFile] = React.useState<File>();
  const [resumeeDownloadURL, setResumeeDownloadURL] = React.useState("");

  const applicationinstance = useSnapshot(ApplicationInstance);

  const handleSelectedCoverLetter = (files: any) => {
    if (files && files[0].size < 10000000) {
      setCoverLetterFile(files[0]);
    }
  };

  const handleSelectedResumee = (files: any) => {
    if (files && files[0].size < 10000000) {
      setResumeeFile(files[0]);
    }
  };

  const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    ApplicationInstance.instance.experience = e.target
      .value as unknown as number;
  };

  const handleCoverLetterUpload = () => {
    if (coverLetterFile) {
      const name =
        props.job_id.toString() +
        employeeData?.getEmployeeProfile?.id.toString() +
        coverLetterFile.name;
      const storageRef = ref(storage, `/coverletters/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, coverLetterFile);

      uploadTask.on(
        "state_changed",
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setCoverLetterDownloadURL(url);
          });
        },
        () => {
          setUploadError("failed to upload files");
        }
      );
    } else {
      setUploadError("files not found");
    }
  };

  const handleResumeeUpload = () => {
    if (resumeeFile) {
      const name =
        props.job_id.toString() +
        employeeData?.getEmployeeProfile?.id.toString() +
        resumeeFile.name;
      const storageRef = ref(storage, `/resumees/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, resumeeFile);

      uploadTask.on(
        "state_changed",
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setResumeeDownloadURL(url);
          });
        },
        () => {
          setUploadError("failed to upload files");
        }
      );
    } else {
      setUploadError("files not found");
    }
  };

  const handleDocumentUpload = () => {
    setImmediateLoading(true);
    handleCoverLetterUpload();
    handleResumeeUpload();
    setImmediateLoading(false);
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

  const [createApplication, { data, loading, error }] = useMutation(
    CREATE_APPLICATION_MUTATION
  );

  React.useEffect(() => {
    if (data !== undefined) {
      setDisableSubmit(true);
      setMessage("Submission Successful");
    }
  }, [data]);

  React.useEffect(() => {
    if (
      applicationinstance.instance.experience !== "" &&
      applicationinstance.instance.educationLevel !== "" &&
      coverLetterFile !== undefined &&
      resumeeFile !== undefined
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [applicationinstance.instance, coverLetterFile, resumeeFile]);

  React.useEffect(() => {
    if (coverLetterDownloadURL !== "" && resumeeDownloadURL !== "") {
      createApplication({
        variables: {
          newapplication: {
            educationLevel: handleStringValue(
              applicationinstance.instance.educationLevel
            ) as string,
            experience: handleNumberStringValue(
              applicationinstance.instance.experience
            ) as number,
            coverLetterUrl: coverLetterDownloadURL,
            resumeeUrl: resumeeDownloadURL,
            jobID: props.job_id,
          },
        },
      }).catch((res) => {
        const errors = res.graphQLErrors.map(() => {
          console.log(errors.message);
        });
      });
    }
  }, [coverLetterDownloadURL, resumeeDownloadURL]);

  return (
    <div className="p-4 text-sm" style={{ fontFamily: "McLaren" }}>
      <Stack spacing={1}>
        <TextField
          placeholder="Years of experience"
          onChange={handleChangeExperience}
          value={applicationinstance.instance.experience}
          type="number"
          size="small"
        />
        <SelectEducationLevel />
        <div className="grid grid-cols-[100px_1fr]">
          <div>Cover Letter:</div>
          <input
            id="upload"
            type="file"
            className=""
            accept=".pdf"
            onChange={(event) => handleSelectedCoverLetter(event.target.files)}
          />
        </div>
        <div className="grid grid-cols-[100px_1fr]">
          <div>Resumee:</div>
          <input
            id="upload"
            type="file"
            className=""
            accept=".pdf"
            onChange={(event) => handleSelectedResumee(event.target.files)}
          />
        </div>
        <Button
          disabled={disableSubmit}
          loading={immediateLoading || loading}
          sx={{ fontFamily: "McLaren" }}
          onClick={() => {
            setDisableSubmit(false);
            handleDocumentUpload();
          }}
        >
          {message}
        </Button>
        <div className="text-red-600">{error?.message}</div>
        <div className="text-red-600">{uploadError}</div>
      </Stack>
    </div>
  );
}
