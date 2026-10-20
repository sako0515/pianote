import { addDays } from "./date";

type DatedLog = { date: string; practice: number };

export const dailyMinutes = (
  logs: DatedLog[],
  dates: string[],
): { date: string; minutes: number }[] =>
  dates.map((date) => ({
    date,
    minutes: logs
      .filter((log) => log.date === date)
      .reduce((total, log) => total + log.practice, 0),
  }));

// 今日まだ練習していなくても、昨日まで続いていれば連続日数として数える
export const calcStreak = (logs: { date: string }[], today: string): number => {
  const practicedDates = new Set(logs.map((log) => log.date));

  let day = practicedDates.has(today) ? today : addDays(today, -1);
  let streak = 0;
  while (practicedDates.has(day)) {
    streak++;
    day = addDays(day, -1);
  }
  return streak;
};
