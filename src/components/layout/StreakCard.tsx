type StreakCardProps = {
  streak: number;
};

const streakMessage = (streak: number): string => {
  if (streak === 0) return "今日から始めましょう";
  if (streak < 3) return "いい調子です";
  return "今週もいいリズムです";
};

export default function StreakCard({ streak }: StreakCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-terracotta/20 bg-peach px-5 py-6">
      <span className="font-serif text-3xl text-terracotta">{streak}</span>
      <div>
        <p className="text-sm font-bold text-ink">日練習</p>
        <p className="mt-1 text-[11px] text-ink/50">{streakMessage(streak)}</p>
      </div>
    </div>
  );
}
