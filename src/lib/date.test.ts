import { describe, expect, it } from "vitest";
import {
  addDays,
  formatEnglishDate,
  formatMonthDay,
  lastNDays,
  toDateString,
  weekdayLabel,
} from "./date";

it("形式は YYYY-MM-DD です", () => {
  expect(toDateString(new Date(2026, 9, 13))).toBe("2026-10-13");
});

describe("addDays", () => {
  it("月をまたいで日付を進められる", () => {
    expect(addDays("2026-10-31", 1)).toBe("2026-11-01");
  });
  it("負の数で日付を戻せる", () => {
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });
});

it("lastNDaysは今日を最後に古い順で並ぶ", () => {
  expect(lastNDays(3, "2026-10-14")).toEqual([
    "2026-10-12",
    "2026-10-13",
    "2026-10-14",
  ]);
});

it("formatMonthDayは0埋めしない", () => {
  expect(formatMonthDay("2026-01-05")).toBe("1月5日");
});

it("formatEnglishDateは英語の曜日と月を大文字で返す", () => {
  expect(formatEnglishDate("2026-05-21")).toBe("THURSDAY, MAY 21");
});

it("weekdayLabelは曜日を1文字で返す", () => {
  expect(weekdayLabel("2026-10-14")).toBe("水");
});
