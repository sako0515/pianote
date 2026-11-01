import { Music, X } from "lucide-react";
import type { PracticeLog } from "../../schemas/practice";

type SessionItemProps = {
  log: PracticeLog;
  index: number;
  onDelete: (id: string) => void;
};

// アイコンの色は行ごとに交互に変える
const ICON_TONES = ["bg-accent-soft text-accent", "bg-subtle text-muted"];

export default function SessionItem({ log, index, onDelete }: SessionItemProps) {
  return (
    <li className="flex items-center gap-4 border-b border-line py-5">
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${
          ICON_TONES[index % ICON_TONES.length]
        }`}
      >
        <Music className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-fg">{log.title}</p>
        {log.memo && (
          <p className="mt-1 truncate text-xs text-muted">{log.memo}</p>
        )}
      </div>
      <p className="shrink-0 text-2xl text-fg">
        {log.practice}
        <span className="ml-1 text-xs text-muted">分</span>
      </p>
      <button
        aria-label={`${log.title}の記録を削除`}
        className="cursor-pointer rounded-full p-2 text-muted duration-200 hover:bg-subtle hover:text-fg"
        onClick={() => onDelete(log.id)}
      >
        <X className="size-3.5" />
      </button>
    </li>
  );
}
