"use client";

import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";
import { AcceptApplicationButtonProps } from "./accept-application-button";

const PEND_APPLICATION_MUTATION = gql(`
    mutation pendApplication($id: Int!){
    editApplication(id: $id, status: PENDING){
      id
      status
    }
  }
`);

export default function PendApplicationButton(props: AcceptApplicationButtonProps) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Revert to Pending");

  const [acceptApplication, { data, loading, error }] = useMutation(
    PEND_APPLICATION_MUTATION
  );

  useEffect(() => {
    if (data?.editApplication.status.toString() == "PENDING") {
      setDisable(true);
      setMessage("Pending");
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
      disabled={props.status == "PENDING" || disable}
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
       {props.status == "PENDING" ? "Pending" : message}
    </Button>
  );
}