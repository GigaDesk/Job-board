"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import Stack from "@mui/joy/Stack";

const GET_EMPLOYER_ANALYTICS_QUERY = gql(`
query getEmployerAnalytics{
  getEmployerProfile{
  analytics{
    jobs_approval{
      approvedjobs
      unapprovedJobs
    }
    applications_status{
      total
      accepted
      rejected
      pending
    }
    jobs_education_level{
      diploma
      bachelors_degree
      masters_degree
      phd
      unspecified
    }
    unapprovedjobs_education_level{
      diploma
      bachelors_degree
      masters_degree
      phd
      unspecified
    }
    jobs_seniority{
      beginner
      intermediate
      senior
      unspecified
    }
    unapprovedjobs_seniority{
      beginner
      intermediate
      senior
      unspecified
    }
    jobs_experience{
      below_one
      one_to_three
      three_to_five
      five_to_seven
      seven_to_nine
      nine_and_above
    }
    unapprovedjobs_experience{
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
  const { data: analytics } = useQuery(GET_EMPLOYER_ANALYTICS_QUERY);

  return (
    <div>
      <Stack spacing={4}>
        <div>
          <h3>Job Approval: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Approved Jobs",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_approval.approvedjobs as number,
                  },
                  {
                    label: "Unapproved Jobs",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_approval.unapprovedJobs as number,
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
          <h3>Approved Jobs Education Level Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Diploma",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_education_level.diploma as number,
                  },
                  {
                    label: "Bachelor's Degree",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_education_level.bachelors_degree as number,
                  },
                  {
                    label: "Master's Degree",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_education_level.masters_degree as number,
                  },
                  {
                    label: "PhD",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_education_level.phd as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_education_level.unspecified as number,
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
          <h3>Unapproved Jobs Education Level Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Diploma",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_education_level.diploma as number,
                  },
                  {
                    label: "Bachelor's Degree",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_education_level
                      .bachelors_degree as number,
                  },
                  {
                    label: "Master's Degree",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_education_level.masters_degree as number,
                  },
                  {
                    label: "PhD",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_education_level.phd as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_education_level.unspecified as number,
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
          <h3>Approved Jobs Seniority Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Beginner",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_seniority.beginner as number,
                  },
                  {
                    label: "Intermediate",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_seniority.intermediate as number,
                  },
                  {
                    label: "Senior",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_seniority.senior as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployerProfile?.analytics
                      .jobs_seniority.unspecified as number,
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
          <h3>Unapproved Jobs Seniority Distribution: </h3>
          <PieChart
            series={[
              {
                data: [
                  {
                    label: "Beginner",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_seniority.beginner as number,
                  },
                  {
                    label: "Intermediate",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_seniority.intermediate as number,
                  },
                  {
                    label: "Senior",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_seniority.senior as number,
                  },
                  {
                    label: "Unspecified",
                    value: analytics?.getEmployerProfile?.analytics
                      .unapprovedjobs_seniority.unspecified as number,
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
                    value: analytics?.getEmployerProfile?.analytics
                      .applications_status.accepted as number,
                  },
                  {
                    label: "Rejected",
                    value: analytics?.getEmployerProfile?.analytics
                      .applications_status.rejected as number,
                  },
                  {
                    label: "Pending",
                    value: analytics?.getEmployerProfile?.analytics
                      .applications_status.pending as number,
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
          <h3>Jobs Experience Distribution: </h3>
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
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .below_one as number,
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .one_to_three as number,
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .three_to_five as number,
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .five_to_seven as number,
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .seven_to_nine as number,
                  analytics?.getEmployerProfile?.analytics.jobs_experience
                    .nine_and_above as number,
                ],
                label: "Approved Jobs",
              },
              {
                data: [
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.below_one as number,
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.one_to_three as number,
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.three_to_five as number,
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.five_to_seven as number,
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.seven_to_nine as number,
                  analytics?.getEmployerProfile?.analytics
                    .unapprovedjobs_experience.nine_and_above as number,
                ],
                label: "Unapproved Jobs",
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
