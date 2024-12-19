import type { betterAuth } from "better-auth";
import type { DB } from "better-auth/adapters/drizzle";

export type Auth = ReturnType<typeof betterAuth<DB>>;
