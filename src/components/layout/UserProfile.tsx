type UserProfileProps = {
  name: string;
  initials: string;
  description: string;
};

export default function UserProfile({
  name,
  initials,
  description,
}: UserProfileProps) {
  return (
    <div className="flex items-center gap-3 px-1">
      <span className="flex size-9 items-center justify-center rounded-full bg-sage/70 text-xs font-bold text-white">
        {initials}
      </span>
      <div>
        <p className="text-sm font-bold text-ink">{name}</p>
        <p className="text-[11px] text-ink/50">{description}</p>
      </div>
    </div>
  );
}
