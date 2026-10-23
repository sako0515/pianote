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

// 新しい日付順。同じ日の中では後から追加したものを上にする
export const sortByNewest = <T extends { date: string }>(logs: T[]): T[] =>
  logs
    .map((log, index) => ({ log, index }))
    .sort((a, b) => b.log.date.localeCompare(a.log.date) || b.index - a.index)
    .map(({ log }) => log);

export const groupByDate = <T extends DatedLog>(
  logs: T[],
): { date: string; logs: T[]; totalMinutes: number }[] => {
  const groups = new Map<string, T[]>();
  for (const log of sortByNewest(logs)) {
    groups.set(log.date, [...(groups.get(log.date) ?? []), log]);
  }
  return [...groups].map(([date, logs]) => ({
    date,
    logs,
    totalMinutes: logs.reduce((total, log) => total + log.practice, 0),
  }));
};

export const practiceDays = (logs: { date: string }[]): number =>
  new Set(logs.map((log) => log.date)).size;
