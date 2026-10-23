import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import BottomNav from "../components/layout/BottomNav";
import Sidebar from "../components/layout/Sidebar";
import { usePracticeLogsContext } from "../contexts/practiceLogsContext";
import { toDateString } from "../lib/date";
import { calcStreak } from "../lib/stats";

export default function RootLayout() {
  const { logs } = usePracticeLogsContext();

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar streak={calcStreak(logs, toDateString())} />
      <main className="min-w-0 flex-1 px-4 pt-6 pb-24 md:px-6 md:py-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Header />
          <Outlet />
        </div>
      </main>
      <BottomNav />
      <ScrollRestoration />
    </div>
  );
}
