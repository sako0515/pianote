import { formatMonthDay } from "../../lib/date";
import type { PracticeLog } from "../../schemas/practice";

type HistoryListProps = {
  logs: PracticeLog[];
};

export default function HistoryList({ logs }: HistoryListProps) {
  if (logs.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-muted">
        まだ記録がありません
      </p>
    );
  }

  return (
    <ul className="border-t border-line">
      {logs.map((log) => (
        <li
          key={log.id}
          className="flex items-center gap-6 border-b border-line py-3.5"
        >
          <span className="w-16 shrink-0 text-xs text-muted">
            {formatMonthDay(log.date)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-fg">{log.title}</p>
            {log.memo && (
              <p className="mt-0.5 truncate text-xs text-muted">
                {log.memo}
              </p>
            )}
          </div>
          <span className="shrink-0 text-sm text-accent">
            +{log.practice} EXP
          </span>
        </li>
      ))}
    </ul>
  );
}
