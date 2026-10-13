import z from "zod";

export const practiceLogSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  practice: z.number().int().positive(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const practiceLogsSchema = z.array(practiceLogSchema);

export type PracticeLog = z.infer<typeof practiceLogSchema>;
