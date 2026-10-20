import { useEffect, useState } from "react";
import {
  practiceLogsSchema,
  type PracticeInput,
  type PracticeLog,
} from "../schemas/practice";
import { toDateString } from "../lib/date";

const STORAGE_KEY = "logs";

const loadLogs = (): PracticeLog[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const result = practiceLogsSchema.safeParse(JSON.parse(raw));
    if (result.success) return result.data;
  } catch {
    // JSONとして壊れている場合は、下でバックアップしてから空にする
  }

  localStorage.setItem(`${STORAGE_KEY}_backup`, raw);
  return [];
};

export const usePracticeLogs = () => {
  const [logs, setLogs] = useState(loadLogs);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  }, [logs]);

  const addLog = (input: PracticeInput) => {
    setLogs((prev) => [
      ...prev,
      { ...input, id: crypto.randomUUID(), date: toDateString() },
    ]);
  };

  const removeLog = (id: string) => {
    setLogs((prev) => prev.filter((log) => log.id !== id));
  };

  return { logs, addLog, removeLog };
};
