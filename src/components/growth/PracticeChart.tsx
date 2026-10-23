import { formatMonthDay, parseDateString, weekdayLabel } from "../../lib/date";

type PracticeChartProps = {
  days: { date: string; minutes: number }[];
  today: string;
};

const WEEK_LENGTH = 7;

export default function PracticeChart({ days, today }: PracticeChartProps) {
  const max = Math.max(...days.map((d) => d.minutes), 1);
  // 1週間分なら曜日、それより長ければ5日おきに日付を出す
  const isWeekly = days.length <= WEEK_LENGTH;

  const labelFor = (date: string): string => {
    if (isWeekly) return weekdayLabel(date);
    const day = parseDateString(date).getDate();
    return day % 5 === 0 || date === today ? String(day) : "";
  };

  return (
    <div
      className={`flex h-56 items-stretch justify-between rounded-2xl bg-sand pt-5 pb-3 ${
        isWeekly ? "gap-3 px-6" : "gap-0.5 px-3 md:gap-1 md:px-5"
      }`}
    >
      {days.map(({ date, minutes }) => {
        const isToday = date === today;
        return (
          <div
            key={date}
            title={`${formatMonthDay(date)} ${minutes}分`}
            className="flex min-w-0 flex-1 flex-col items-center gap-2"
          >
            <span className="h-3 text-[9px] text-ink/50">
              {isWeekly && minutes > 0 ? minutes : ""}
            </span>
            <div
              className={`relative flex-1 overflow-hidden rounded-full bg-black/5 ${
                isWeekly ? "w-4" : "w-full max-w-2.5"
              }`}
            >
              <div
                className="absolute inset-x-0 bottom-0 rounded-full bg-linear-to-t from-terracotta to-[#e5a587] transition-all duration-500"
                style={{ height: `${(minutes / max) * 100}%` }}
              />
            </div>
            <span
              className={`h-3 text-[10px] whitespace-nowrap ${
                isToday ? "font-bold text-terracotta" : "text-ink/50"
              }`}
            >
              {labelFor(date)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
