const getNextHours = (): string[] => {
  const result: string[] = [];
  const currentDate = new Date();

  for (let i = 0; i < 24; i++) {
    const nextHourDate = new Date(currentDate);
    nextHourDate.setHours(currentDate.getHours() + i);
    result.push(nextHourDate.toLocaleTimeString([], { hour: '2-digit' }));
  }

  return result;
};
const hous = getNextHours();
hous[0] = 'Now';

export const nextHours = hous;
