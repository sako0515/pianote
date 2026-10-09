import "./App.css";
import { BellDot } from "lucide-react";
import PianoArea from "./components/PianoArea";
import PianoForm from "./components/PianoForm";
import { useEffect, useState } from "react";

type PracticeLog = {
  id: number;
  title: string;
  author: string;
  practice: number;
  date: string;
};

function App() {
  const [logs, setLogs] = useState<PracticeLog[]>(() => {
    const storedLogs = localStorage.getItem("logs"); // return string | null;

    if (storedLogs) {
      return JSON.parse(storedLogs);
    }
    return [];
  });
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [practice, setPractice] = useState(0);

  const getToday = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today: string = getToday();
  const todayLogs = logs.filter((log) => log.date === today);

  const todayTotal = todayLogs.reduce((total, log) => {
    return total + log.practice;
  }, 0);

  const totalExp = logs.reduce((total, log) => {
    return total + log.practice;
  }, 0);

  const expPerLevel = 100;
  const level = Math.floor(totalExp / expPerLevel) + 1;
  const currentLevelExp = totalExp % expPerLevel;
  const expProgress = (currentLevelExp / expPerLevel) * 100;

  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [logs]);

  const handleDelete = (id: number) => {
    if (!confirm("Sure?")) return;
    const newLogs = logs.filter((log) => {
      return log.id !== id;
    });
    setLogs(newLogs);
  };

  const handlePracticeSubmit = (
    title: string,
    author: string,
    practice: number,
  ) => {
    setLogs([
      ...logs,
      {
        id: Date.now(),
        title: title,
        author: author,
        practice: practice,
        date: getToday(),
      },
    ]);
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
      <PianoArea
        maxExp={expPerLevel}
        level={level}
        currentExp={currentLevelExp}
        progress={expProgress}
      />
      <PianoForm
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        practice={practice}
        setPractice={setPractice}
        onPracticeSubmit={handlePracticeSubmit}
      />
      <main className="px-6 py-4  bg-white rounded-2xl w-180 mx-auto mt-6 shadow-sm">
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
