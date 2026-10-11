export const EXP_PER_LEVEL = 100;

export const calcLevelInfo = (totalExp: number) => {
  const currentExp = totalExp % EXP_PER_LEVEL;
  return {
    level: Math.floor(totalExp / EXP_PER_LEVEL) + 1,
    currentExp,
    maxExp: EXP_PER_LEVEL,
    progress: (currentExp / totalExp) * 100,
  };
};

export const sumMinutes = (logs: { practice: number }[]): number =>
  logs.reduce((total, log) => total + log.practice, 0);
