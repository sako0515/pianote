export default function PianoArea() {
  return (
    <div className="bg-[#1c493f] shadow-sm rounded-2xl px-6 py-4 w-180 mx-auto mt-6">
      <p className="text-sm text-gray-500">MY PIANO</p>
      <h1 className="text-white font-bold text-4xl mt-4">Lv .18</h1>
      <p className="text-white font-bold mt-2">響きのピアノ</p>
      <svg viewBox="0 0 120 92" className="w-100 mx-auto">
        <rect x="8" y="12" width="104" height="68" rx="6" fill="#f8f5ea" />
        <path d="M8 52h104v22a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V52Z" fill="#fff" />
        {[26, 44, 62, 80, 98].map((x) => (
          <path d={`M${x} 52v28`} stroke="#c9c5b9" />
        ))}
        {[20, 38, 56, 74, 92].map((x) => (
          <rect x={x} y="12" width="11" height="43" fill="#173f38" />
        ))}
      </svg>
      <span className="text-white font-bold mt-2">次のレベルまで</span>
      <span className="text-gray-500 font-bold mt-2 float-right">82 %</span>
    </div>
  );
}
