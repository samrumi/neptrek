import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { createClient } from "./src";

const db = createClient(process.env["DATABASE_URL"]!);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [process.env["TRUSTED_ORIGIN"]!],
  plugins: [admin()],
});
