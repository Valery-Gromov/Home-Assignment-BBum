// Функция для получения названия дня недели
const getDayName = (date: Date): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

// Функция для получения даты и дня недели на ближайшие семь дней
export const getNextSevenDays = (): { date: string; day: string }[] => {
  const result = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const dateString = currentDate.toISOString().split('T')[0]; // Форматирование даты в ISO строку
    const dayString = getDayName(currentDate);

    result.push({ date: dateString, day: dayString });
  }

  return result;
};

const sevenDays = getNextSevenDays();
sevenDays[0].day = 'Today'

export const nextSevenDays = sevenDays;
