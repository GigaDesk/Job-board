import { DateTime } from 'luxon';

//Returns local date
export const ToLocalDate = (utcTime: string) => {
  // Parse the UTC string
  const utcDateTime = DateTime.fromISO(utcTime, { zone: "utc" });

  // Get the local timezone of the user's environment
  const localTimeZone = DateTime.local().zoneName;

  // Convert to the local timezone
  const localDateTime = utcDateTime.setZone(localTimeZone);

  // Format to YYYY-MM-DD
  const localDateString = localDateTime.toFormat("yyyy-MM-dd");

  return localDateString;
};
