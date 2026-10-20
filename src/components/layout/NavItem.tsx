import type { LucideIcon } from "lucide-react";

type NavItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
};

export default function NavItem({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold duration-200 ${
        active ? "bg-sand text-ink" : "text-ink/60 hover:bg-sand/60"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}
