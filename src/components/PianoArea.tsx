type PianoAreaProps = {
  maxExp: number;
  level: number;
  currentExp: number;
  progress: number;
};

export default function PianoArea({
  maxExp,
  level,
  currentExp,
  progress,
}: PianoAreaProps) {
  return (
    <div className="bg-[#1c493f] rounded-2xl px-6 py-4 w-full max-w-2xl mx-auto mt-6">
      <p className="text-sm text-gray-500">MY PIANO</p>
      <h1 className="text-white font-bold text-4xl mt-4">Lv .{level}</h1>
      <p className="text-white font-bold mt-2">響きのピアノ</p>
      <svg viewBox="0 0 120 92" className="w-full max-w-md mx-auto">
        <rect x="8" y="12" width="104" height="68" rx="6" fill="#f8f5ea" />
        <path d="M8 52h104v22a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V52Z" fill="#fff" />
        {[26, 44, 62, 80, 98].map((x) => (
          <path d={`M${x} 52v28`} stroke="#c9c5b9" />
        ))}
        {[20, 38, 56, 74, 92].map((x) => (
          <rect x={x} y="12" width="11" height="43" fill="#173f38" />
        ))}
      </svg>
      <div>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">次のレベルまで</span>
          <span className="text-white font-bold">{Math.floor(progress)} %</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-[#a9c69a] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-gray-300 text-sm">{currentExp} EXP</span>
          <span className="text-gray-300 text-sm">{maxExp} EXP</span>
        </div>
      </div>
    </div>
  );
}
