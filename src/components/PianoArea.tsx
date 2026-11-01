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
    <section className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface">
      <h2 className="bg-brand px-6 py-4 text-lg font-medium text-white">
        マイピアノ
      </h2>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-4xl font-medium text-fg">Lv. {level}</p>
        <p className="mt-2 text-sm text-muted">{levelTitle(level)}</p>

        <svg
          viewBox="0 0 70 42"
          className="mx-auto my-8 w-full max-w-56"
          aria-hidden
        >
          {WHITE_KEYS.map((i) => (
            <rect
              key={i}
              x={i * 10}
              y="0"
              width="9.2"
              height="42"
              rx="1"
              fill="#e8eaed"
            />
          ))}
          {BLACK_KEYS.map((i) => (
            <rect
              key={i}
              x={i * 10 + 6.6}
              y="0"
              width="5.6"
              height="25"
              rx="0.5"
              fill="#1f1f1f"
            />
          ))}
        </svg>

        <div className="mt-auto">
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-fg">次のレベルまで</span>
            <span className="font-medium text-accent">
              {Math.floor(progress)}%
            </span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span>{totalExp} EXP</span>
            <span>次まで {remainingExp} EXP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
