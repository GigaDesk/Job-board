"use client";

import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { AcceptApplicationButtonProps } from "./accept-application-button";

const REJECT_APPLICATION_MUTATION = gql(`
    mutation rejectApplication($id: Int!){
    editApplication(id: $id, status: REJECTED){
      id
      status
    }
  }
`);

export default function RejectApplicationButton(props: AcceptApplicationButtonProps) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Reject");

  const [acceptApplication, { data, loading, error }] = useMutation(
    REJECT_APPLICATION_MUTATION
  );

  useEffect(() => {
    if (data?.editApplication.status.toString() == "REJECTED") {
      setDisable(true);
      setMessage("Rejected");
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
      loading={loading}
      disabled={props.status == "REJECTED" || disable}
      onClick={(e) => {
        e.preventDefault();
        acceptApplication({
          variables: {
            id: props.id,
          },
        }).catch((res) => {
          const errors = res.graphQLErrors.map(() => {
            console.log(errors.message);
          });
        });
      }}
    >
       {props.status == "REJECTED" ? "Rejected" : message}
    </Button>
  );
}