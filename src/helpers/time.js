import { getHours, getMinutes, getSeconds } from 'date-fns';

export const getTime = () => {
  const date = new Date();
  let hour = getHours(date);
  let minute = getMinutes(date);
  let second = getSeconds(date);

  if (hour <= 9) hour = `0${hour}`;
  if (minute <= 9) minute = `0${minute}`;
  if (second <= 9) second = `0${second}`;

  return `#${hour}${minute}${second}`;
};
