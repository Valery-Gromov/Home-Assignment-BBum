/**
 * Converts a UNIX timestamp to formatted time considering the offset.
 * @param timestamp - The UNIX timestamp (in seconds).
 * @param offset - The time offset (in seconds).
 * @returns Formatted time as a string "HH:MM".
 */
export const convertUnixTimestamp = (timestamp: number, offset: number): string => {
  // Create a Date object considering the offset (timestamp + offset) * 1000 to convert to milliseconds.
  const date = new Date((timestamp + offset) * 1000);

  // Get the hours in UTC format.
  const hours = date.getUTCHours();

  // Get the minutes in UTC format and add a leading zero.
  const minutes = '0' + date.getUTCMinutes();

  // Format the time as a string "HH:MM".
  const formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
};
