/**
 * Converts a UNIX timestamp to formatted time considering the offset.
 * @param timestamp - The UNIX timestamp (in seconds).
 * @param offset - The time offset (in seconds).
 * @returns Formatted time as a string "HH:MM".
 */
export const convertUnixTimestamp = (timestamp: number, offset: number): string => {
  const date = new Date((timestamp + offset) * 1000);
  const hours = date.getUTCHours();
  const minutes = '0' + date.getUTCMinutes();
  const formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
};
