import { levelTitle, type LevelInfo } from "../lib/exp";

const WHITE_KEYS = [0, 1, 2, 3, 4, 5, 6];
const BLACK_KEYS = [0, 1, 3, 4, 5];

export default function PianoArea({
  level,
  totalExp,
  remainingExp,
  progress,
}: LevelInfo) {
  return (
    <section
      id="my-piano"
      className="relative flex scroll-mt-6 flex-col overflow-hidden rounded-3xl bg-forest px-8 py-10 text-white shadow-sm"
    >
      {/* 背景の装飾 */}
      <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border border-white/10" />

      <p className="text-[10px] font-semibold tracking-[0.2em] text-white/60">
        MY PIANO
      </p>
      <h2 className="mt-6 font-serif text-5xl font-semibold">Lv. {level}</h2>
      <p className="mt-3 text-sm text-white/70">{levelTitle(level)}</p>

      <div className="relative mx-auto my-6 flex size-64 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
        <div className="absolute inset-6 rounded-full border border-white/10 bg-white/3" />
        <div className="relative flex size-40 items-center justify-center rounded-full bg-linear-to-br from-[#4f7a6c] to-[#24564a] shadow-2xl ring-1 ring-white/15">
          <svg viewBox="0 0 70 42" className="w-24" aria-hidden>
            {WHITE_KEYS.map((i) => (
              <rect
                key={i}
                x={i * 10}
                y="0"
                width="9.2"
                height="42"
                rx="1.5"
                fill="#fbfaf5"
              />
            ))}
            {BLACK_KEYS.map((i) => (
              <rect
                key={i}
                x={i * 10 + 6.6}
                y="0"
                width="5.6"
                height="25"
                rx="1"
                fill="#1c493f"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-end justify-between">
          <span className="text-sm font-bold">次のレベルまで</span>
          <span className="font-serif text-xl text-[#e7a27d]">
            {Math.floor(progress)}%
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-terracotta transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-white/60">
          <span>{totalExp} EXP</span>
          <span>次まで {remainingExp} EXP</span>
        </div>
      </div>
    </section>
  );
}
