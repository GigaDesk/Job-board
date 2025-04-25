"use client";

import { useEffect, useState } from "react";
import { ActiveRoute } from "../../../state/store";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Button from "@mui/joy/Button";
import MuiPhoneNumber from "mui-phone-number";
import { Link } from "@mui/material";

const GET_EMPLOYER_PROFILE_QUERY = gql(`
  query getEmployerProfile1{
    getEmployerProfile{
      name
      phone_number
      Website
    }
  }
  `);

const EDIT_EMPLOYER_PROFILE_MUTATION = gql(`
  mutation editEmployerProfile($input: UpdatedEmployer!){
    editEmployerProfile(input: $input){
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

  const [Website, setWebsite] = useState("");

  const [editWebsite, setEditWebsite] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(e.target.value);
  };

  const handleChangePhoneNumber = (
    e: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhoneNumber(e as string);
  };

  const [editEmployeeProfile, { loading, data: editEmployer }] = useMutation(
    EDIT_EMPLOYER_PROFILE_MUTATION
  );

  const { data } = useQuery(GET_EMPLOYER_PROFILE_QUERY);

  useEffect(() => {
    if (data !== undefined) {
      setName(data.getEmployerProfile?.name as string);
      setPhoneNumber(data.getEmployerProfile?.phone_number as string);
      setWebsite(data.getEmployerProfile?.Website as string);
    }
  }, [data]);

  useEffect(() => {
    if (editEmployer !== undefined) {
      setEditName(false);
      setEditPhoneNumber(false);
      setEditWebsite(false);
    }
  }, [editEmployer]);

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
                        input: {
                          name: Name,
                          phone_number: PhoneNumber,
                          Website: Website,
                        },
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
                        input: {
                          name: Name,
                          phone_number: PhoneNumber,
                          Website: Website,
                        },
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
          <div className="text-text-table-gray">
            <div className="text-black"> Website: </div>
            <span className="">
              {editWebsite ? (
                <TextField
                  placeholder="Website URL"
                  size="small"
                  value={Website}
                  onChange={handleChangeWebsite}
                />
              ) : (
                <Link
                  href={
                    data?.getEmployerProfile?.Website != null
                      ? Website
                      : undefined
                  }
                >
                  {Website}
                </Link>
              )}
            </span>
            {editWebsite ? (
              <span className="ml-2">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    editEmployeeProfile({
                      variables: {
                        input: {
                          name: Name,
                          phone_number: PhoneNumber,
                          Website: Website,
                        },
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
                  setEditWebsite(true);
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
