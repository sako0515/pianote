import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

type NavItemProps = {
  to: string;
  label: string;
  icon: LucideIcon;
  collapsed: boolean;
};

export default function NavItem({
  to,
  label,
  icon: Icon,
  collapsed,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      // "/" が全ページで選択中にならないよう、完全一致のときだけ選択中にする
      end={to === "/"}
      // 閉じているときはラベルが見えないので、ホバーで名前を出す
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold duration-200 ${
          isActive ? "bg-sand text-ink" : "text-ink/60 hover:bg-sand/60"
        }`
      }
    >
      <Icon className="size-4 shrink-0" />
      <span
        className={`whitespace-nowrap transition-opacity duration-200 motion-reduce:transition-none ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        {label}
      </span>
    </NavLink>
  );
}
