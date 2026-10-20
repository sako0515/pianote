import { describe, expect, it } from "vitest";
import { calcStreak, dailyMinutes } from "./stats";

it("dailyMinutesは日付ごとに合計し、記録のない日は0になる", () => {
  const logs = [
    { date: "2026-10-13", practice: 20 },
    { date: "2026-10-14", practice: 30 },
    { date: "2026-10-14", practice: 20 },
  ];
  expect(
    dailyMinutes(logs, ["2026-10-12", "2026-10-13", "2026-10-14"]),
  ).toEqual([
    { date: "2026-10-12", minutes: 0 },
    { date: "2026-10-13", minutes: 20 },
    { date: "2026-10-14", minutes: 50 },
  ]);
});

describe("calcStreak", () => {
  it("今日から連続している日数を数える", () => {
    const logs = [
      { date: "2026-10-11" },
      { date: "2026-10-12" },
      { date: "2026-10-13" },
      { date: "2026-10-14" },
    ];
    expect(calcStreak(logs, "2026-10-14")).toBe(4);
  });
  it("途中で途切れたらそこまで", () => {
    const logs = [{ date: "2026-10-11" }, { date: "2026-10-14" }];
    expect(calcStreak(logs, "2026-10-14")).toBe(1);
  });
  it("今日まだ練習していなくても昨日までの連続を数える", () => {
    const logs = [{ date: "2026-10-12" }, { date: "2026-10-13" }];
    expect(calcStreak(logs, "2026-10-14")).toBe(2);
  });
  it("昨日も今日も練習していなければ0", () => {
    expect(calcStreak([{ date: "2026-10-11" }], "2026-10-14")).toBe(0);
  });
});
