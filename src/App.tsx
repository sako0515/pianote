import "./App.css";
import { BellDot } from "lucide-react";
import PianoArea from "./components/PianoArea";
import PianoForm from "./components/PianoForm";
import { useState } from "react";

type PracticeLog = {
  id: number;
  title: string;
  author: string;
  practice: number;
};

function App() {
  const [logs, setLogs] = useState<PracticeLog[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [practice, setPractice] = useState(0);

  const handlePracticeSubmit = (
    title: string,
    author: string,
    practice: number,
  ) => {
    const newLogs = [...logs];
    newLogs.push({
      id: Date.now(),
      title: title,
      author: author,
      practice: practice,
    });
    setLogs(newLogs);
  };

  return (
    <div className="min-h-screen bg-[#f4f1e8]">
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">TUESDAY, MAY 21</span>
          <span className="text-xl font-medium">おかえりなさい、Marie</span>
        </div>
        <button className="cursor-pointer bg-white rounded-4xl">
          <BellDot className="m-3" />
        </button>
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
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
