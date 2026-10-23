import { Plus } from "lucide-react";
import Card, { CardHeading } from "../components/Card";
import DailyNoteGroup from "../components/notes/DailyNoteGroup";
import { usePracticeLogsContext } from "../contexts/practiceLogsContext";
import { toDateString } from "../lib/date";
import { groupByDate } from "../lib/stats";

export default function NotesPage() {
  const { logs, deleteLog, openForm } = usePracticeLogsContext();
  const today = toDateString();
  const groups = groupByDate(logs);

  return (
    <Card>
      <div className="mb-8 flex items-start justify-between">
        <CardHeading eyebrow="PRACTICE NOTES" title="練習ノート" />
        <button
          onClick={openForm}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-black/10 px-3.5 py-2 text-xs font-semibold text-ink duration-200 hover:bg-sand active:translate-y-0.5"
        >
          <Plus className="size-3.5" />
          記録する
        </button>
      </div>
      {groups.length === 0 ? (
        <p className="py-10 text-center text-sm text-ink/50">
          まだ記録がありません。「記録する」から最初の練習を残しましょう。
        </p>
      ) : (
        groups.map((group) => (
          <DailyNoteGroup
            key={group.date}
            {...group}
            isToday={group.date === today}
            onDelete={deleteLog}
          />
        ))
      )}
    </Card>
  );
}
