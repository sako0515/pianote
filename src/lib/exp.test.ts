import { describe, expect, it } from "vitest";
import { calcLevelInfo } from "./exp";

describe(calcLevelInfo, () => {
  it("0 EXP は Lv.1 で進歩 0%", () => {
    expect(calcLevelInfo(0)).toMatchObject({
      level: 1,
      currentExp: 0,
      progress: 0,
    });
  });
  it("99 EXP は Lv.1", () => {
    expect(calcLevelInfo(99)).toBe(1);
  });
  it("100 EXP は Lv.2 で進歩 0%", () => {
    expect(calcLevelInfo(100)).toMatchObject({
      level: 1,
      currentExp: 0,
    });
  });
});
