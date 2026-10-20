import { Plus } from "lucide-react";
import type { PracticeLog } from "../../schemas/practice";
import Card, { CardHeading } from "../Card";
import SessionItem from "./SessionItem";
import SessionSummary from "./SessionSummary";

type TodaySessionProps = {
  logs: PracticeLog[];
  totalMinutes: number;
  onAdd: () => void;
  onDelete: (id: string) => void;
};

export default function TodaySession({
  logs,
  totalMinutes,
  onAdd,
  onDelete,
}: TodaySessionProps) {
  return (
    <Card id="today">
      <div className="flex items-start justify-between border-b border-black/5 pb-6">
        <CardHeading eyebrow="TODAY'S SESSION" title="今日の練習ノート" />
        <button
          onClick={onAdd}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-black/10 px-3.5 py-2 text-xs font-semibold text-ink duration-200 hover:bg-sand active:translate-y-0.5"
        >
          <Plus className="size-3.5" />
          記録する
        </button>
      </div>
      {logs.length === 0 ? (
        <p className="py-10 text-center text-sm text-ink/50">
          まだ今日の記録はありません
        </p>
      ) : (
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
      )}
      <SessionSummary totalMinutes={totalMinutes} />
    </Card>
  );
}
