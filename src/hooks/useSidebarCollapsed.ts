import { useEffect, useState } from "react";

const STORAGE_KEY = "sidebarCollapsed";

// 閉じた状態を覚えておく。保存できない環境では毎回開いた状態から始める
const loadCollapsed = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

export const useSidebarCollapsed = () => {
  const [collapsed, setCollapsed] = useState(loadCollapsed);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(collapsed));
    } catch {
      // 保存できなくても開閉自体は動くので無視する
    }
  }, [collapsed]);

  const toggle = () => setCollapsed((prev) => !prev);

  return { collapsed, toggle };
};
