import "./App.css";
import { BellDot } from "lucide-react";
import PianoArea from "./components/PianoArea";
import PianoForm from "./components/PianoForm";
import { toDateString } from "./lib/date";
import { calclevelInfo, sumMinutes } from "./lib/exp";
import { usePracticeLogs } from "./hooks/usePracticeLogs";

function App() {
  const { logs, addLog, removeLog } = usePracticeLogs();

  const today = toDateString();
  const todayLogs = logs.filter((log) => log.date === today);
  const todayTotal = sumMinutes(todayLogs);
  const levelInfo = calclevelInfo(sumMinutes(logs));

  const handleDelete = (id: string) => {
    if (!confirm("この記録を削除しますか？")) return;
    removeLog(id);
  };

  return (
    <div className="min-h-screen bg-[#f4f1e8]">
      <header className="items-center px-6 py-4">
        <span className="text-sm text-gray-600">{today}</span>
        <button className="float-right shadow-sm cursor-pointer bg-white rounded-4xl duration-300 hover:bg-gray-200 active:translate-y-0.5">
          <BellDot className="m-3" />
        </button>
        <h2 className="text-xl font-medium">おかえりなさい、User</h2>
      </header>
      <PianoArea {...levelInfo} />
      <PianoForm
        onSubmit={addLog}
      />
      <main className="px-6 py-4  bg-white rounded-2xl w-full max-w-2xl mx-auto mt-6 shadow-sm">
        <div className="flex flex-col mb-4">
          <span className="text-sm text-gray-600">TODAY'S SESSION</span>
          <span className="text-xl font-medium">今日の練習</span>
        </div>
        <ul>
          {todayLogs.map((log) => (
            <li key={log.id} className="border-t border-gray-400 py-4">
              <div className="flex justify-between">
                <span className="font-medium text-2xl">{log.title}</span>
                <span className="font-medium text-2xl">{log.practice}分</span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-gray-400 text-sm">{log.author}</p>
                <button
                  className="bg-red-400 p-2 text-xl rounded-2xl cursor-pointer hover:opacity-80 active:translate-y-0.5 duration-300"
                  onClick={() => handleDelete(log.id)}
                >
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-[#edf0e7] rounded-2xl p-4 shadow-sm">
          <div className="float-right border-l border-gray-400 mr-4 pl-4">
            <p className="text-gray-400 text-sm">合計練習時間</p>
            <p className="text-2xl font-bold">{todayTotal}分</p>
          </div>
          <p className="text-gray-400 text-sm">今日の獲得経験値</p>
          <span className="text-2xl font-bold">+{todayTotal}EXP</span>
        </div>
      </main>
    </div>
  );
}

export default App;
