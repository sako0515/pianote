import { useState } from "react";
import { ChartNoAxesColumn, House, NotebookText } from "lucide-react";
import NavItem from "./NavItem";
import StreakCard from "./StreakCard";
import UserProfile from "./UserProfile";

const NAV_ITEMS = [
  { href: "#my-piano", label: "マイピアノ", icon: House },
  { href: "#today", label: "練習ノート", icon: NotebookText },
  { href: "#growth", label: "成長の記録", icon: ChartNoAxesColumn },
];

type SidebarProps = {
  streak: number;
  user: { fullName: string; initials: string; description: string };
};

export default function Sidebar({ streak, user }: SidebarProps) {
  const [activeHref, setActiveHref] = useState(NAV_ITEMS[0].href);

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col justify-between border-r border-black/5 bg-paper px-6 py-10 md:flex">
      <div>
        <div className="mb-14 flex items-center gap-3 px-2">
          <span className="flex items-end gap-1" aria-hidden>
            <span className="h-4 w-1.5 rounded-full bg-terracotta" />
            <span className="h-6 w-1.5 rounded-full bg-terracotta" />
            <span className="h-5 w-1.5 rounded-full bg-terracotta" />
          </span>
          <span className="font-serif text-2xl font-semibold text-ink">
            Pianote
          </span>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              active={activeHref === item.href}
              onClick={() => setActiveHref(item.href)}
            />
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-8">
        <StreakCard streak={streak} />
        <UserProfile
          name={user.fullName}
          initials={user.initials}
          description={user.description}
        />
      </div>
    </aside>
  );
}
