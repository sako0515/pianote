import { describe, expect, it } from "vitest";
import { calcLevelInfo, levelTitle } from "./exp";

describe("calcLevelInfo", () => {
  it("0EXPはLv.1で進歩0%", () => {
    expect(calcLevelInfo(0)).toMatchObject({
      level: 1,
      currentExp: 0,
      progress: 0,
    });
  });
  it("99EXPはまだLv.1", () => {
    expect(calcLevelInfo(99).level).toBe(1);
  });
  it("100EXPでLv.2になり、進歩が0に戻る", () => {
    expect(calcLevelInfo(100)).toMatchObject({ level: 2, currentExp: 0 });
  });
  it("120EXPは次のレベルまで残り80EXP", () => {
    expect(calcLevelInfo(120)).toMatchObject({
      totalExp: 120,
      remainingExp: 80,
      progress: 20,
    });
  });
});

describe("levelTitle", () => {
  it("Lv.2は「はじまりのピアノ」", () => {
    expect(levelTitle(2)).toBe("はじまりのピアノ");
  });
  it("Lv.5で「響きのピアノ」になる", () => {
    expect(levelTitle(5)).toBe("響きのピアノ");
  });
});
