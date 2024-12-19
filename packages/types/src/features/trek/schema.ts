import { z } from "zod";
import { NT_TREK_DIFFICULTY, NT_TREK_SEASONS } from "./constants";

export const createTrekSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  difficulty: z.enum(NT_TREK_DIFFICULTY),
  distance: z.number().positive("Distance must be positive"),
  duration: z.number().int().positive("Duration must be positive"),
  maxAltitude: z.number().int().positive("Max altitude must be positive"),
  startPoint: z.string().min(1, "Start point is required"),
  endPoint: z.string().min(1, "End point is required"),
  bestSeasons: z
    .array(z.enum(NT_TREK_SEASONS))
    .min(1, "At least one season is required"),
});
