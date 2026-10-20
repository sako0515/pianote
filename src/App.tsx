import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PianoArea from "./components/PianoArea";
import PracticeFormModal from "./components/PracticeFormModal";
import GrowthLog from "./components/growth/GrowthLog";
import Sidebar from "./components/layout/Sidebar";
import TodaySession from "./components/today/TodaySession";
import { usePracticeLogs } from "./hooks/usePracticeLogs";
import { lastNDays, toDateString } from "./lib/date";
import { calcLevelInfo, sumMinutes } from "./lib/exp";
import { calcStreak, dailyMinutes } from "./lib/stats";

// ログイン機能ができるまでの仮のユーザー
const USER = {
  name: "Marie",
  fullName: "Marie K.",
  initials: "MK",
  description: "ピアノ愛好家",
};

function App() {
  const { logs, addLog, removeLog } = usePracticeLogs();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const today = toDateString();
  const todayLogs = logs.filter((log) => log.date === today);
  const totalMinutes = sumMinutes(logs);

  const handleDelete = (id: string) => {
    if (!confirm("この記録を削除しますか？")) return;
    removeLog(id);
  };

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar streak={calcStreak(logs, today)} user={USER} />
      <main className="min-w-0 flex-1 px-4 py-6 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Header name={USER.name} date={today} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_3fr]">
            <PianoArea {...calcLevelInfo(totalMinutes)} />
            <TodaySession
              logs={todayLogs}
              totalMinutes={sumMinutes(todayLogs)}
              onAdd={() => setIsFormOpen(true)}
              onDelete={handleDelete}
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
        </div>
      </main>
      <PracticeFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={addLog}
      />
    </div>
  );
}

export default App;
