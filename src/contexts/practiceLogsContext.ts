import { createContext, use } from "react";
import type { usePracticeLogs } from "../hooks/usePracticeLogs";

type PracticeLogsContextValue = ReturnType<typeof usePracticeLogs> & {
  // 確認ダイアログを出してから削除する
  deleteLog: (id: string) => void;
  openForm: () => void;
};

export const PracticeLogsContext =
  createContext<PracticeLogsContextValue | null>(null);

export const usePracticeLogsContext = () => {
  const value = use(PracticeLogsContext);
  if (!value) {
    throw new Error("PracticeLogsProvider の中で使ってください");
  }
  return value;
};
