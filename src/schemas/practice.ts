import * as z from "zod";

export const practiceLogSchema = z.object({
  id: z.string(),
  title: z.string().trim().min(1, "曲名を入力してください"),
  author: z.string().trim().min(1, "作曲家を入力してください"),
  practice: z
    .number("練習時間を数値で入力してください")
    .int("練習時間は整数で入力してください")
    .min(1, "練習時間は1分以上にしてください")
    .max(600, "練習時間は600分以内にしてください"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "日付はYYYY-MM-DDの形にしてください"),
});

export const practiceLogsSchema = z.array(practiceLogSchema);

export type PracticeLog = z.infer<typeof practiceLogSchema>;