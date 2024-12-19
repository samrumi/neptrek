import { betterAuth } from "better-auth";
import { drizzleAdapter, type DB } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { createClient } from "./client";

const db = createClient(process.env["DATABASE_URL"]!);

export const auth: ReturnType<typeof betterAuth<DB>> = betterAuth<DB>({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [process.env["TRUSTED_ORIGIN"]!],
  plugins: [admin()],
});
