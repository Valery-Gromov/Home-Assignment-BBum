export const convertUnixTimestamp = (timestamp: number, offset: number) => {
  const date = new Date((timestamp + offset) * 1000);
  const hours = date.getUTCHours();
  const minutes = '0' + date.getUTCMinutes();
  const formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime;
};
