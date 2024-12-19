import type { z } from "zod";
import type { loginSchema, registerSchema } from "./schema";

export type NTRegisterInput = z.infer<typeof registerSchema>;
export type NTLoginInput = z.infer<typeof loginSchema>;
