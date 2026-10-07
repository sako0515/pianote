import "./App.css";
import { BellDot } from "lucide-react";

type PracticeLog = {
  id: number;
  title: string;
  author: string;
  practice: number;
  date: string;
};

function App() {
  const logs: PracticeLog[] = [
    {
      id: 0,
      title: "幻想即興曲",
      author: "ショパン",
      practice: 30,
      date: "2026-10-06",
    },
    {
      id: 1,
      title: "月の光",
      author: "ドビュッシー",
      practice: 60,
      date: "2026-10-06",
    },
    {
      id: 2,
      title: "ジムペディ 第1番",
      author: "エリック",
      practice: 50,
      date: "2026-10-06",
    },
  ];

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

      <div className="bg-[#1c493f] shadow-sm rounded-2xl px-6 py-4 w-180 mx-auto mt-6">
        <p className="text-sm text-gray-500">MY PIANO</p>
        <h1 className="text-white font-bold text-4xl mt-4">Lv .18</h1>
        {/* <svg viewBox="0 0 120 92" className="piano-mark">
          <rect x="8" y="12" width="104" height="68" rx="6" fill="#f8f5ea" />

          <path
            d="M8 52h104v22a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V52Z"
            fill="#fff"
          />

          {[26, 44, 62, 80, 98].map((x) => (
            <path d={`M${x} 52v28`} stroke="#c9c5b9" />
          ))}

          {[20, 38, 56, 74, 92].map((x) => (
            <rect x={x} y="12" width="11" height="43" fill="#173f38" />
          ))}
        </svg> */}
        <p className="text-white font-bold mt-2">響きのピアノ</p>
        <span className="text-white font-bold mt-2">次のレベルまで</span>
        <span className="text-gray-500 font-bold mt-2 float-right">82 %</span>
        <div className=""></div>
      </div>

      <form className="px-6 py-4  bg-white rounded-2xl w-180 mx-auto mt-6 shadow-sm">
        <label>
          <input
            type="text"
            placeholder="曲名"
            className="block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-120"
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="作曲家"
            className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-2 w-120"
          />
        </label>
        <label>
          <select className="mt-4 block border border-gray-400 rounded-md p-3 shadow-sm mr-8 w-120 text-center">
            <option value="">-- 練習時間 --</option>
            <option value="10分">10分</option>
            <option value="20分">20分</option>
            <option value="30分">30分</option>
            <option value="40分">40分</option>
            <option value="50分">50分</option>
            <option value="60分">60分</option>
          </select>
        </label>
        <button className="mt-4 border border-gray-300 p-2 rounded-md shadow-sm cursor-pointer duration-300 hover:bg-gray-200 active:translate-y-0.5">
          ＋練習を追加
        </button>
      </form>

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
