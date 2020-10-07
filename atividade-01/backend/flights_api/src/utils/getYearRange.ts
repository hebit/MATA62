import { toDate, zonedTimeToUtc } from "date-fns-tz";
import getUnixTime from "date-fns/getUnixTime";
import { FlihgtYears } from "./types";

type YearRange = {
  start: number;
  end: number;
};

export function getDateFromBrasiliaTimezone(dateStr: string, time?: string) {
  return toDate(`${dateStr}T00:00:00-03:00`);
}

export function getUnixTimeFromBrasiliaTimezone(dateStr: string) {
  const date = getDateFromBrasiliaTimezone(dateStr);
  return getUnixTime(date);
}

export function getYearRange(year: FlihgtYears | number): YearRange {
  const start = getUnixTimeFromBrasiliaTimezone(`${year}-01-01T00:00:00`);
  const end = getUnixTimeFromBrasiliaTimezone(`${year}-12-31T00:00:00`);
  return { start, end };
}
