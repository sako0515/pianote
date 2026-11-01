import { useSearchParams } from "react-router";
import Card, { CardHeading } from "../components/Card";
import HistoryList from "../components/growth/HistoryList";
import PracticeChart from "../components/growth/PracticeChart";
import { usePracticeLogsContext } from "../contexts/practiceLogsContext";
import { lastNDays, toDateString } from "../lib/date";
import { sumMinutes } from "../lib/exp";
import {
  calcStreak,
  dailyMinutes,
  practiceDays,
  sortByNewest,
} from "../lib/stats";

const RANGES = {
  week: { label: "1週間", days: 7 },
  month: { label: "30日", days: 30 },
} as const;

type Range = keyof typeof RANGES;

const isRange = (value: string | null): value is Range =>
  value !== null && value in RANGES;

export default function GrowthPage() {
  const { logs } = usePracticeLogsContext();
  // 表示期間はURL（?range=month）に持たせ、再読み込みしても保つ
  const [searchParams, setSearchParams] = useSearchParams();
  const rangeParam = searchParams.get("range");
  const range: Range = isRange(rangeParam) ? rangeParam : "week";

  const today = toDateString();
  const totalMinutes = sumMinutes(logs);
  const days = practiceDays(logs);
  const stats = [
    { label: "これまでの練習", value: totalMinutes, unit: "分" },
    { label: "練習した日数", value: days, unit: "日" },
    { label: "連続練習", value: calcStreak(logs, today), unit: "日" },
    {
      label: "1日あたり",
      value: days === 0 ? 0 : Math.round(totalMinutes / days),
      unit: "分",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ label, value, unit }) => (
          <div
            key={label}
            className="rounded-lg border border-line bg-surface px-5 py-4"
          >
            <p className="text-xs text-muted">{label}</p>
            <p className="mt-1 text-2xl text-fg">
              {value}
              <span className="ml-1 text-xs text-muted">{unit}</span>
            </p>
          </div>
        ))}
      </div>

      <Card>
        <div className="mb-6 flex items-start justify-between gap-4">
          <CardHeading title="練習時間の推移" />
          <div className="flex rounded-lg bg-subtle p-1" role="group">
            {(Object.keys(RANGES) as Range[]).map((key) => (
              <button
                key={key}
                aria-pressed={range === key}
                onClick={() =>
                  setSearchParams(
                    { range: key },
                    { replace: true, preventScrollReset: true },
                  )
                }
                className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium duration-200 ${
                  range === key
                    ? "bg-surface text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {RANGES[key].label}
              </button>
            ))}
          </div>
        </div>
        <PracticeChart
          days={dailyMinutes(logs, lastNDays(RANGES[range].days, today))}
          today={today}
        />
      </Card>

      <Card>
        <div className="mb-6">
          <CardHeading title="練習の履歴" />
        </div>
        <HistoryList logs={sortByNewest(logs)} />
      </Card>
    </div>
  );
}
