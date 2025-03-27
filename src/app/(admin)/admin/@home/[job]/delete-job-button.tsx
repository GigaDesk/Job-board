"use client";

import { gql } from "../../../../../__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

const DELETE_JOB_MUTATION = gql(`
  mutation removeJob($id: Int!) {   
    removeJob( id: $id ) {    
      id
     }    
 }
`);

export interface RemoveJobButtonProps {
  id: number;
}

export default function DeleteJobButton(props: RemoveJobButtonProps) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Delete");

  const [deleteJob, { loading, error, data }] =
    useMutation(DELETE_JOB_MUTATION);

  useEffect(() => {
    if (data?.removeJob.id != undefined) {
      setDisable(true);
      setMessage("Deleted");
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
        color="danger"
        onClick={(e) => {
          e.preventDefault();
          deleteJob({
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
