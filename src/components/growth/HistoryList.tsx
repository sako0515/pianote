import { formatMonthDay } from "../../lib/date";
import type { PracticeLog } from "../../schemas/practice";

type HistoryListProps = {
  logs: PracticeLog[];
};

export default function HistoryList({ logs }: HistoryListProps) {
  if (logs.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-ink/50">
        まだ記録がありません
      </p>
    );
  }

  return (
    <ul className="border-t border-black/5">
      {logs.map((log) => (
        <li
          key={log.id}
          className="flex items-center gap-6 border-b border-black/5 py-3.5"
        >
          <span className="w-14 shrink-0 font-serif text-xs text-ink/50">
            {formatMonthDay(log.date)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-ink">{log.title}</p>
            {log.memo && (
              <p className="mt-0.5 truncate text-[10px] text-ink/50">
                {log.memo}
              </p>
            )}
          </div>
          <span className="shrink-0 font-serif text-sm text-terracotta">
            +{log.practice} EXP
          </span>
        </li>
      ))}
    </ul>
  );
}
