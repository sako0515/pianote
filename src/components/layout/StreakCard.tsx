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
      className="flex items-center gap-4 overflow-hidden rounded-2xl border border-terracotta/20 bg-peach px-4 py-6"
    >
      <span className="w-5 shrink-0 text-center font-serif text-3xl text-terracotta">
        {streak}
      </span>
      <div
        className={`whitespace-nowrap transition-opacity duration-200 motion-reduce:transition-none ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-sm font-bold text-ink">日練習</p>
        <p className="mt-1 text-[11px] text-ink/50">{streakMessage(streak)}</p>
      </div>
    </div>
  );
}
