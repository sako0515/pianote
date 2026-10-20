const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export const toDateString = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const parseDateString = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const addDays = (dateStr: string, days: number): string => {
  const date = parseDateString(dateStr);
  date.setDate(date.getDate() + days);
  return toDateString(date);
};

export const lastNDays = (n: number, today: string): string[] =>
  Array.from({ length: n }, (_, i) => addDays(today, i - (n - 1)));

export const formatMonthDay = (dateStr: string): string => {
  const date = parseDateString(dateStr);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
};

export const weekdayLabel = (dateStr: string): string =>
  WEEKDAYS[parseDateString(dateStr).getDay()];

// "2026-05-21" → "THURSDAY, MAY 21"
export const formatEnglishDate = (dateStr: string): string =>
  parseDateString(dateStr)
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
