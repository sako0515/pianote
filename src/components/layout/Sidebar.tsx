import { ChevronLeft } from "lucide-react";
import { useSidebarCollapsed } from "../../hooks/useSidebarCollapsed";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navItems";
import StreakCard from "./StreakCard";

type SidebarProps = {
  streak: number;
};

export default function Sidebar({ streak }: SidebarProps) {
  const { collapsed, toggle } = useSidebarCollapsed();

  return (
    <aside
      className={`sticky top-0 z-20 hidden h-screen shrink-0 border-r border-black/5 bg-paper transition-[width] duration-300 ease-in-out motion-reduce:transition-none md:block ${
        collapsed ? "w-19" : "w-60"
      }`}
    >
      {/* 開閉ボタンは境界線の上に出すため、overflow-hidden の外に置く */}
      <button
        onClick={toggle}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "サイドバーを開く" : "サイドバーを閉じる"}
        className="absolute top-12 -right-3.5 z-10 flex size-7 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-paper text-ink/60 shadow-sm duration-200 hover:bg-sand hover:text-ink"
      >
        <ChevronLeft
          className={`size-4 transition-transform duration-300 motion-reduce:transition-none ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      <div className="flex h-full flex-col justify-between overflow-hidden px-3 py-10">
        <div>
          <div className="mb-14 flex items-center gap-3 px-3.5">
            <span className="flex shrink-0 items-end gap-1" aria-hidden>
              <span className="h-4 w-1.5 rounded-full bg-terracotta" />
              <span className="h-6 w-1.5 rounded-full bg-terracotta" />
              <span className="h-5 w-1.5 rounded-full bg-terracotta" />
            </span>
            <span
              className={`font-serif text-2xl font-semibold whitespace-nowrap text-ink transition-opacity duration-200 motion-reduce:transition-none ${
                collapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              Pianote
            </span>
          </div>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.to} {...item} collapsed={collapsed} />
            ))}
          </nav>
        </div>
        <StreakCard streak={streak} collapsed={collapsed} />
      </div>
    </aside>
  );
}
