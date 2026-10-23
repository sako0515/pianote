import { formatMonthDay, weekdayLabel } from "../../lib/date";
import type { PracticeLog } from "../../schemas/practice";
import SessionItem from "../today/SessionItem";

type DailyNoteGroupProps = {
  date: string;
  logs: PracticeLog[];
  totalMinutes: number;
  isToday: boolean;
  onDelete: (id: string) => void;
};

export default function DailyNoteGroup({
  date,
  logs,
  totalMinutes,
  isToday,
  onDelete,
}: DailyNoteGroupProps) {
  return (
    <section className="mt-8 first:mt-0">
      <div className="flex items-baseline justify-between border-b border-black/10 pb-3">
        <h3 className="font-bold text-ink">
          <span className="font-serif">{formatMonthDay(date)}</span>
          <span className="ml-1 text-sm text-ink/50">
            （{weekdayLabel(date)}）
          </span>
          {isToday && (
            <span className="ml-2 rounded-full bg-peach px-2 py-0.5 text-[10px] text-terracotta">
              今日
            </span>
          )}
        </h3>
        <p className="text-xs text-ink/50">
          合計 <span className="font-serif text-base text-ink">{totalMinutes}</span>{" "}
          分
        </p>
      </div>
      <ul>
        {logs.map((log, index) => (
          <SessionItem
            key={log.id}
            log={log}
            index={index}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
