"use client";

import { useEffect, useState } from "react";
import { ActiveRoute } from "../../../state/store";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Button from "@mui/joy/Button";
import MuiPhoneNumber from "mui-phone-number";

const GET_EMPLOYEE_PROFILE_QUERY = gql(`
  query getEmployeeProfile1{
    getEmployeeProfile{
      name
      phone_number
      profilepicture
    }
  }
  `);

const EDIT_EMPLOYEE_PROFILE_MUTATION = gql(`
  mutation editEmployeeProfile($input: UpdateEmployee!){
    editEmployeeProfile(input: $input){
      id
    }
  }
  `);

export default function Home() {
  useEffect(() => {
    ActiveRoute.instance = "Profile";
  }, []);

  const [PhoneNumber, setPhoneNumber] = useState("");

  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  const [Name, setName] = useState("");

  const [editName, setEditName] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (
    e: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhoneNumber(e as string);
  };

  const [editEmployeeProfile, { loading, data: editEmployee }] = useMutation(
    EDIT_EMPLOYEE_PROFILE_MUTATION
  );

  const { data } = useQuery(GET_EMPLOYEE_PROFILE_QUERY);

  useEffect(() => {
    if (data !== undefined) {
      setName(data.getEmployeeProfile?.name as string);
      setPhoneNumber(data.getEmployeeProfile?.phone_number as string);
    }
  }, [data]);

  useEffect(() => {
    if (editEmployee !== undefined) {
      setEditName(false);
      setEditPhoneNumber(false);
    }
  }, [editEmployee]);

  return (
    <div
      className="w-full p-4 overflow-auto grid justify-items-center gap-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="w-full text-black">
        <div className="grid gap-4">
          <div className="text-black text-md font-bold">
            Profile Information
          </div>
          <div className="text-text-table-gray">
            <div className="text-black"> Name: </div>
            <span className="">
              {editName ? (
                <TextField
                  placeholder="Name"
                  size="small"
                  value={Name}
                  onChange={handleChangeName}
                />
              ) : (
                Name
              )}
            </span>
            {editName ? (
              <span className="ml-2">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    editEmployeeProfile({
                      variables: {
                        input: { name: Name, phone_number: PhoneNumber },
                      },
                    }).catch((res) => {
                      const errors = res.graphQLErrors.map(() => {
                        console.log(errors.message);
                      });
                    });
                  }}
                  loading={loading}
                >
                  Edit
                </Button>
              </span>
            ) : (
              <button
                className="px-4"
                onClick={() => {
                  setEditName(true);
                }}
              >
                <EditIcon fontSize="small" />
              </button>
            )}
          </div>
          <div className="text-text-table-gray">
            <div className="text-black"> Contact: </div>
            <span className="">
              {editPhoneNumber ? (
                <MuiPhoneNumber
                  defaultCountry={"ke"}
                  onChange={handleChangePhoneNumber}
                  onlyCountries={["ke"]}
                  countryCodeEditable={false}
                  value={PhoneNumber}
                />
              ) : (
                PhoneNumber
              )}
            </span>
            {editPhoneNumber ? (
              <span className="ml-2">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    editEmployeeProfile({
                      variables: {
                        input: { name: Name, phone_number: PhoneNumber },
                      },
                    }).catch((res) => {
                      const errors = res.graphQLErrors.map(() => {
                        console.log(errors.message);
                      });
                    });
                  }}
                  loading={loading}
                >
                  Edit
                </Button>
              </span>
            ) : (
              <button
                className="px-4"
                onClick={() => {
                  setEditPhoneNumber(true);
                }}
              >
                <EditIcon fontSize="small" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
