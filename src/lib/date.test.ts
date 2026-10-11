import { expect, it } from "vitest";
import { toDateString } from "./date";

it("日付を YYYY-MM-DD の形にする", () => {
  expect(toDateString(new Date(2026, 9, 11))).toBe("2026-10-11");
});
