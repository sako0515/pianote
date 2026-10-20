import { Music, X } from "lucide-react";
import type { PracticeLog } from "../../schemas/practice";

type SessionItemProps = {
  log: PracticeLog;
  index: number;
  onDelete: (id: string) => void;
};

// アイコンの色は行ごとに交互に変える
const ICON_TONES = ["bg-peach text-terracotta", "bg-sand text-moss"];

export default function SessionItem({ log, index, onDelete }: SessionItemProps) {
  return (
    <li className="flex items-center gap-4 border-b border-black/5 py-5">
      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
          ICON_TONES[index % ICON_TONES.length]
        }`}
      >
        <Music className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-ink">{log.title}</p>
        {log.memo && (
          <p className="mt-1 truncate text-[11px] text-ink/50">{log.memo}</p>
        )}
      </div>
      <p className="shrink-0 font-serif text-2xl text-ink">
        {log.practice}
        <span className="ml-1 font-sans text-[10px] text-ink/50">分</span>
      </p>
      <button
        aria-label={`${log.title}の記録を削除`}
        className="cursor-pointer rounded-full p-2 text-ink/40 duration-200 hover:bg-sand hover:text-ink"
        onClick={() => onDelete(log.id)}
      >
        <X className="size-3.5" />
      </button>
    </li>
  );
}
