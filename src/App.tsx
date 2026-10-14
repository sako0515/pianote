import "./App.css";
import PianoArea from "./components/PianoArea";
import PianoForm from "./components/PianoForm";
import { toDateString } from "./lib/date";
import { calclevelInfo, sumMinutes } from "./lib/exp";
import { usePracticeLogs } from "./hooks/usePracticeLogs";
import Header from "./components/Header";
import TodaySession from "./components/TodaySession";

function App() {
  const { logs, addLog, removeLog } = usePracticeLogs();

  const today = toDateString();
  const todayLogs = logs.filter((log) => log.date === today);
  const levelInfo = calclevelInfo(sumMinutes(logs));

  const handleDelete = (id: string) => {
    if (!confirm("この記録を削除しますか？")) return;
    removeLog(id);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header date={today} />
      <PianoArea {...levelInfo} />
      <PianoForm onSubmit={addLog} />
      <TodaySession
        logs={todayLogs}
        totalMinutes={sumMinutes(todayLogs)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
