import type { PracticeLog } from "../schemas/practice";

type TodaySessionProps = {
  logs: PracticeLog[];
  totalMinutes: number;
  onDelete: (id: string) => void;
};

export default function TodaySession({
  logs,
  totalMinutes,
  onDelete,
}: TodaySessionProps) {
  return (
    <main className="px-6 py-4  bg-white rounded-2xl w-full max-w-2xl mx-auto mt-6 shadow-sm">
      <div className="flex flex-col mb-4">
        <span className="text-sm text-gray-600">TODAY'S SESSION</span>
        <span className="text-xl font-medium">今日の練習</span>
      </div>
      <ul>
        {logs.map((log) => (
          <li key={log.id} className="border-t border-gray-400 py-4">
            <div className="flex justify-between">
              <span className="font-medium text-2xl">{log.title}</span>
              <span className="font-medium text-2xl">{log.practice}分</span>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-sm">{log.author}</p>
              <button
                className="bg-red-400 p-2 text-xl rounded-2xl cursor-pointer hover:opacity-80 active:translate-y-0.5 duration-300"
                onClick={() => onDelete(log.id)}
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
          <p className="text-2xl font-bold">{totalMinutes}分</p>
        </div>
        <p className="text-gray-400 text-sm">今日の獲得経験値</p>
        <span className="text-2xl font-bold">+{totalMinutes}EXP</span>
      </div>
    </main>
  );
}
