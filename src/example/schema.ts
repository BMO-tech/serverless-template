import { z } from "zod";

export const NewExampleSchema = z.object({
  name: z.string(),
});
export type NewExample = z.infer<typeof NewExampleSchema>;

export const UpdateExampleSchema = z.object({
  name: z.string(),
});
export type UpdateExample = z.infer<typeof UpdateExampleSchema>;
