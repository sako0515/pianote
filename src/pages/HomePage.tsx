import PianoArea from "../components/PianoArea";
import GrowthLog from "../components/growth/GrowthLog";
import TodaySession from "../components/today/TodaySession";
import { usePracticeLogsContext } from "../contexts/practiceLogsContext";
import { lastNDays, toDateString } from "../lib/date";
import { calcLevelInfo, sumMinutes } from "../lib/exp";
import { dailyMinutes } from "../lib/stats";

export default function HomePage() {
  const { logs, deleteLog, openForm } = usePracticeLogsContext();

  const today = toDateString();
  const todayLogs = logs.filter((log) => log.date === today);
  const totalMinutes = sumMinutes(logs);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_3fr]">
        <PianoArea {...calcLevelInfo(totalMinutes)} />
        <TodaySession
          logs={todayLogs}
          totalMinutes={sumMinutes(todayLogs)}
          onAdd={openForm}
          onDelete={deleteLog}
        />
      </div>
      <div className="mt-6">
        <GrowthLog
          logs={logs}
          weeklyMinutes={dailyMinutes(logs, lastNDays(7, today))}
          totalMinutes={totalMinutes}
          today={today}
        />
      </div>
    </>
  );
}
