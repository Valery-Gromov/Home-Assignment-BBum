// Function for getting the name of the day of the week
const getDayName = (date: Date): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

// A function for getting the date and day of the week for the next seven days
export const getNextSevenDays = (): { date: string; day: string }[] => {
  const result = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const dateString = currentDate.toISOString().split('T')[0];
    const dayString = getDayName(currentDate);

    result.push({ date: dateString, day: dayString });
  }

  return result;
};
