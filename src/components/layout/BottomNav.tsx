import { NavLink } from "react-router";
import { NAV_ITEMS } from "./navItems";

// スマホではサイドバーを隠すため、画面下にナビを固定する
export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex border-t border-black/5 bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold ${
              isActive ? "text-terracotta" : "text-ink/50"
            }`
          }
        >
          <Icon className="size-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
