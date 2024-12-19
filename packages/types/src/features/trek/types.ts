import type { z } from "zod";
import type { NT_TREK_DIFFICULTY, NT_TREK_SEASONS } from "./constants";
import type { createTrekSchema } from "./schema";

export type NTTrekDifficulty = (typeof NT_TREK_DIFFICULTY)[number];
export type NTTrekSeason = (typeof NT_TREK_SEASONS)[number];

export type NTCreateTrekInput = z.infer<typeof createTrekSchema>;
