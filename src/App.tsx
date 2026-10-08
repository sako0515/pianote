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
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f4f1e8]">
      <header className="items-center px-6 py-4">
        <span className="text-sm text-gray-600">TUESDAY, MAY 21</span>
        <button className="float-right shadow-sm cursor-pointer bg-white rounded-4xl duration-300 hover:bg-gray-200 active:translate-y-0.5">
          <BellDot className="m-3" />
        </button>
        <h2 className="text-xl font-medium">おかえりなさい、User</h2>
      </header>
      <PianoArea />
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
          {logs.map((log) => (
            <li key={log.id} className="border-t border-gray-400 py-4">
              <span className="font-medium text-xl">{log.title}</span>
              <span className="float-right font-medium pt-2 text-3xl">
                {log.practice}分
              </span>
              <p className="text-gray-400">{log.author}</p>
              <button
                className="bg-red-400 p-2 rounded-2xl cursor-pointer hover:opacity-80 active:translate-y-0.5 duration-300"
                onClick={() => handleDelete(log.id)}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
