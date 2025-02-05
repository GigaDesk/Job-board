"use client";

import SchoolItem from "./school-item";
import { gql } from "../../../__generated__/gql";
import { useQuery } from "@apollo/client";

const GET_SCHOOLS_LIST_QUERY = gql(`
query SchoolsProfile{
  getSchoolsProfile{
    id
    name
  }
}
`);

export default function SchoolsList() {
  const { loading, data, error } = useQuery(GET_SCHOOLS_LIST_QUERY);
  return (
    <div>
      {data?.getSchoolsProfile?.map((school) => (
        <SchoolItem key={school.id} id={school.id} name={school.name} />
      ))}
    </div>
  );
}
