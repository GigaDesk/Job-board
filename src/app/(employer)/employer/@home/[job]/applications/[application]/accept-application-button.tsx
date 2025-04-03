"use client";

import { gql } from "@/__generated__/gql";
import { useMutation } from "@apollo/client";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

const ACCEPT_APPLICATION_MUTATION = gql(`
    mutation acceptApplication($id: Int!){
    editApplication(id: $id, status: ACCEPTED){
      id
      status
    }
  }
`);

export interface AcceptApplicationButtonProps {
  id: number;
  status: string;
}

export default function AcceptApplicationButton(
  props: AcceptApplicationButtonProps
) {
  const [disable, setDisable] = useState(false);

  const [message, setMessage] = useState("Accept");

  const [acceptApplication, { data, loading, error }] = useMutation(
    ACCEPT_APPLICATION_MUTATION
  );

  useEffect(() => {
    if (data?.editApplication.status.toString() == "ACCEPTED") {
      setDisable(true);
      setMessage("Accepted");
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
      disabled={props.status == "ACCEPTED" || disable}
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
      {props.status == "ACCEPTED" ? "Accepted" : message}
    </Button>
  );
}
