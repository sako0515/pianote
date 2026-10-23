import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { PracticeLog } from "../../schemas/practice";
import { sortByNewest } from "../../lib/stats";
import Card, { CardHeading } from "../Card";
import HistoryList from "./HistoryList";
import PracticeChart from "./PracticeChart";

const HISTORY_LIMIT = 5;

type GrowthLogProps = {
  logs: PracticeLog[];
  weeklyMinutes: { date: string; minutes: number }[];
  totalMinutes: number;
  today: string;
};

// マイピアノに出す成長の記録の要約。詳しくは /growth で見る
export default function GrowthLog({
  logs,
  weeklyMinutes,
  totalMinutes,
  today,
}: GrowthLogProps) {
  return (
    <Card>
      <div className="mb-8 flex items-start justify-between">
        <CardHeading eyebrow="GROWTH LOG" title="成長の記録" />
        <div className="text-right">
          <p className="text-[10px] text-ink/50">これまでの練習</p>
          <p className="mt-1 font-serif text-xl text-ink">{totalMinutes}分</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <PracticeChart days={weeklyMinutes} today={today} />
        <div>
          <HistoryList logs={sortByNewest(logs).slice(0, HISTORY_LIMIT)} />
          <Link
            to="/growth"
            className="mt-4 flex items-center justify-end gap-1 text-xs font-semibold text-moss hover:text-ink"
          >
            すべて見る
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
