import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schemas";

export const createClient = (url: string) => {
  const queryClient = postgres(url);
  return drizzle(queryClient, { schema });
};

export type Database = ReturnType<typeof createClient>;
