import { Bell } from "lucide-react";
import { formatEnglishDate } from "../lib/date";

type HeaderProps = {
  name: string;
  date: string;
};

export default function Header({ name, date }: HeaderProps) {
  return (
    <header className="mb-6 flex items-center justify-between md:mb-8">
      <div>
        {/* スマホではサイドバーがないため、日付をここに出す */}
        <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-terracotta md:hidden">
          {formatEnglishDate(date)}
        </p>
        <h1 className="text-2xl font-bold text-ink md:text-3xl">
          おかえりなさい、<span className="font-serif">{name}</span>
        </h1>
      </div>
      <button
        aria-label="お知らせ"
        className="relative cursor-pointer rounded-full border border-black/5 bg-paper p-2.5 text-ink shadow-sm duration-300 hover:bg-sand active:translate-y-0.5"
      >
        <Bell className="size-4" />
        <span className="absolute top-2 right-2.5 size-1.5 rounded-full bg-terracotta" />
      </button>
    </header>
  );
}
