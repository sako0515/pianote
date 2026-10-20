import type { PracticeLog } from "../../schemas/practice";
import Card, { CardHeading } from "../Card";
import HistoryList from "./HistoryList";
import WeeklyChart from "./WeeklyChart";

const HISTORY_LIMIT = 5;

type GrowthLogProps = {
  logs: PracticeLog[];
  weeklyMinutes: { date: string; minutes: number }[];
  totalMinutes: number;
  today: string;
};

export default function GrowthLog({
  logs,
  weeklyMinutes,
  totalMinutes,
  today,
}: GrowthLogProps) {
  // 新しい日付順。同じ日の中では後から追加したものを上にする
  const recentLogs = logs
    .map((log, index) => ({ log, index }))
    .sort((a, b) => b.log.date.localeCompare(a.log.date) || b.index - a.index)
    .slice(0, HISTORY_LIMIT)
    .map(({ log }) => log);

  return (
    <Card id="growth">
      <div className="mb-8 flex items-start justify-between">
        <CardHeading eyebrow="GROWTH LOG" title="成長の記録" />
        <div className="text-right">
          <p className="text-[10px] text-ink/50">これまでの練習</p>
          <p className="mt-1 font-serif text-xl text-ink">{totalMinutes}分</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <WeeklyChart days={weeklyMinutes} today={today} />
        <HistoryList logs={recentLogs} />
      </div>
    </Card>
  );
}
