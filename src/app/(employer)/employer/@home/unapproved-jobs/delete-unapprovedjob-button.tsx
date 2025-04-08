"use client";

import { gql } from "../../../../../__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

const DELETE_UNAPPROVEDJOB_MUTATION = gql(`
  mutation removeUnapprovedJob($id: Int!) {   
    removeUnapprovedJob( id: $id ) {    
      id
     }    
 }
`);

export interface RemoveUnapprovedJobButtonProps {
  id: number;
}

export default function DeleteUnapprovedJobButton(
  props: RemoveUnapprovedJobButtonProps
) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Delete");

  const [approveJob, { loading, error, data }] = useMutation(
    DELETE_UNAPPROVEDJOB_MUTATION
  );

  useEffect(() => {
    if (data?.removeUnapprovedJob.id != undefined) {
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
    <Button
      color="danger"
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
  );
}
