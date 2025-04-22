"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import Stack from "@mui/joy/Stack";

const GET_EMPLOYEE_ANALYTICS_QUERY = gql(`
query getEmployeeAnalytics{
  getEmployeeProfile{
  analytics{
    job_application_status{
      total
      accepted
      rejected
      pending
    }
    applied_jobs_education_level{
      diploma
      bachelors_degree
      masters_degree
      phd
      unspecified
    }
    applied_jobs_seniority{
      beginner
      intermediate
      senior
      unspecified
    }
    applied_jobs_experience{
      below_one
      one_to_three
      three_to_five
      five_to_seven
      seven_to_nine
      nine_and_above
    }
  }
  }
}
    `);

export const valueFormatter = (item: { value: number }) => `${item.value}`;

export default function Analytics() {
  const { data: analytics } = useQuery(GET_EMPLOYEE_ANALYTICS_QUERY);

  return (
    <div>
      <Stack spacing={4}>
        <div>
          <h3>Applied Jobs&apos; Education Level Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Diploma",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_education_level.diploma as number,
                  },
                  {
                    label: "Bachelor's Degree",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_education_level.bachelors_degree as number,
                  },
                  {
                    label: "Master's Degree",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_education_level.masters_degree as number,
                  },
                  {
                    label: "PhD",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_education_level.phd as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_education_level.unspecified as number,
                  },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={200}
            width={200}
          />
        </div>
        <div>
          <h3>Applied Jobs&apos; Seniority Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Beginner",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_seniority.beginner as number,
                  },
                  {
                    label: "Intermediate",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_seniority.intermediate as number,
                  },
                  {
                    label: "Senior",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_seniority.senior as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployeeProfile?.analytics
                      .applied_jobs_seniority.unspecified as number,
                  },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={200}
            width={200}
          />
        </div>
        <div>
          <h3>Job Applications Status Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Accepted",
                    value: analytics?.getEmployeeProfile?.analytics
                      .job_application_status.accepted as number,
                  },
                  {
                    label: "Rejected",
                    value: analytics?.getEmployeeProfile?.analytics
                      .job_application_status.rejected as number,
                  },
                  {
                    label: "Pending",
                    value: analytics?.getEmployeeProfile?.analytics
                      .job_application_status.pending as number,
                  },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                valueFormatter,
              },
            ]}
            height={200}
            width={200}
          />
        </div>
        <div>
          <h3>Applied Jobs&apos; Experience Distribution: </h3>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "<1yr",
                  "1-3yrs",
                  "3-5yrs",
                  "5-7yrs",
                  "7-9yrs",
                  "9yrs> ",
                ],
              },
            ]}
            series={[
              {
                data: [
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.below_one as number,
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.one_to_three as number,
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.three_to_five as number,
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.five_to_seven as number,
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.seven_to_nine as number,
                  analytics?.getEmployeeProfile?.analytics
                    .applied_jobs_experience.nine_and_above as number,
                ],
              },
            ]}
            height={300}
            barLabel="value"
          />
        </div>
      </Stack>
    </div>
  );
}
