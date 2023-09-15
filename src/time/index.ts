import createConverter from "../common/converter";

const timeUnits = [
  { unit: 'milliseconds', factor: 1 },
  { unit: 'seconds', factor: 1000 },
  { unit: 'minutes', factor: 60 },
  { unit: 'hours', factor: 60 },
  { unit: 'days', factor: 24 },
];

export const { seconds, milliseconds, minutes, hours, days } = createConverter(timeUnits);
