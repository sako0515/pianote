import { weekdayLabel } from "../../lib/date";

type WeeklyChartProps = {
  days: { date: string; minutes: number }[];
  today: string;
};

export default function WeeklyChart({ days, today }: WeeklyChartProps) {
  const max = Math.max(...days.map((d) => d.minutes), 1);

  return (
    <div className="flex h-56 items-stretch justify-between gap-3 rounded-2xl bg-sand px-6 pt-5 pb-3">
      {days.map(({ date, minutes }) => {
        const isToday = date === today;
        return (
          <div key={date} className="flex flex-1 flex-col items-center gap-2">
            <span className="h-3 text-[9px] text-ink/50">
              {minutes > 0 ? minutes : ""}
            </span>
            <div className="relative w-4 flex-1 overflow-hidden rounded-full bg-black/5">
              <div
                className="absolute inset-x-0 bottom-0 rounded-full bg-linear-to-t from-terracotta to-[#e5a587] transition-all duration-500"
                style={{ height: `${(minutes / max) * 100}%` }}
              />
            </div>
            <span
              className={`text-[10px] ${
                isToday ? "font-bold text-terracotta" : "text-ink/50"
              }`}
            >
              {weekdayLabel(date)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
