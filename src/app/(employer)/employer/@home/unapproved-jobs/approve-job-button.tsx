"use client";

import { gql } from "../../../../../__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

const APPROVE_JOB_MUTATION = gql(`
  mutation approveJob($id: Int!) {   
    approveJob( id: $id ) {    
      id
     }    
 }
`);

export interface ApproveJobButtonProps {
  id: number;
}

export default function ApproveJobButton(props: ApproveJobButtonProps) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Approve");

  const [approveJob, { loading, error, data }] =
    useMutation(APPROVE_JOB_MUTATION);

  useEffect(() => {
    if (data?.approveJob.id != undefined) {
      setDisable(true);
      setMessage("Approved");
    }
  }, [data]);

  useEffect(() => {
    if (error != undefined) {
      setDisable(false);
      setMessage("Failed");
    }
  }, [error]);

  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          approveJob({
            variables: {
              id: props.id,
            },
          }).catch((res) => {
            const errors = res.graphQLErrors.map(() => {
              console.log(errors.message);
            });
          });
        }}
        loading={loading}
        disabled={disable}
      >
        {message}
      </Button>
    </div>
  );
}
