import { expect, it } from "vitest";
import { toDateString } from "./date";

it("形式は YYYY-MM-DD です", () => {
  expect(toDateString(new Date(2026, 9, 13))).toBe("2026-10-13");
});
