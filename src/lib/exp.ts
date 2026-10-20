export const EXP_PER_LEVEL = 100;

const LEVEL_TITLES: { minLevel: number; title: string }[] = [
  { minLevel: 10, title: "歌うピアノ" },
  { minLevel: 5, title: "響きのピアノ" },
  { minLevel: 3, title: "芽吹きのピアノ" },
  { minLevel: 1, title: "はじまりのピアノ" },
];

export const levelTitle = (level: number): string =>
  LEVEL_TITLES.find((t) => level >= t.minLevel)?.title ?? LEVEL_TITLES[3].title;

export const calcLevelInfo = (totalExp: number) => {
  const currentExp = totalExp % EXP_PER_LEVEL;
  return {
    level: Math.floor(totalExp / EXP_PER_LEVEL) + 1,
    totalExp,
    currentExp,
    remainingExp: EXP_PER_LEVEL - currentExp,
    progress: (currentExp / EXP_PER_LEVEL) * 100,
  };
};

export type LevelInfo = ReturnType<typeof calcLevelInfo>;

export const sumMinutes = (logs: { practice: number }[]): number =>
  logs.reduce((total, log) => total + log.practice, 0);
