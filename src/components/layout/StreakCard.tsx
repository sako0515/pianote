type StreakCardProps = {
  streak: number;
  collapsed: boolean;
};

const streakMessage = (streak: number): string => {
  if (streak === 0) return "今日から始めましょう";
  if (streak < 3) return "いい調子です";
  return "今週もいいリズムです";
};

export default function StreakCard({ streak, collapsed }: StreakCardProps) {
  return (
    <div
      title={collapsed ? `${streak}日練習` : undefined}
      className="flex items-center gap-4 overflow-hidden rounded-lg border border-line bg-accent-soft px-4 py-6"
    >
      <span className="w-5 shrink-0 text-center text-3xl text-accent">
        {streak}
      </span>
      <div
        className={`whitespace-nowrap transition-opacity duration-200 motion-reduce:transition-none ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-sm font-medium text-fg">日練習</p>
        <p className="mt-1 text-xs text-muted">{streakMessage(streak)}</p>
      </div>
    </div>
  );
}
