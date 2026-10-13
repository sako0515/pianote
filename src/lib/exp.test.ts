import { describe, expect, it } from "vitest";
import { calclevelInfo } from "./exp";

describe("calclevelInfo", () => {
  it("0EXPはLv.1で進歩0%", () => {
    expect(calclevelInfo(1)).toMatchObject({
      level: 1,
      currentExp: 0,
      progress: 0,
    });
  });
  it("99EXPはまだLv.1", () => {
    expect(calclevelInfo(99).level).toBe(1);
  });
  it("100EXPでLv.2になり、進歩が0に戻る", () => {
    expect(calclevelInfo(100)).toMatchObject({ level: 2, currentExp: 0 });
  });
});
