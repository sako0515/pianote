import { Zap } from "lucide-react";

type SessionSummaryProps = {
  totalMinutes: number;
};

export default function SessionSummary({ totalMinutes }: SessionSummaryProps) {
  return (
    <div className="mt-6 flex items-center gap-4 rounded-lg bg-subtle px-5 py-6 md:px-6">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-page">
        <Zap className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted">今日の獲得経験値</p>
        <p className="text-xl whitespace-nowrap text-fg">
          +{totalMinutes} EXP
        </p>
      </div>
      <div className="flex shrink-0 flex-col border-l border-line pl-4 sm:flex-row sm:items-baseline sm:gap-2 md:pl-6">
        <span className="text-xs text-muted">合計練習時間</span>
        <span className="text-xl text-fg">{totalMinutes}分</span>
      </div>
    </div>
  );
}
