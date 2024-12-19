import type { Env } from "hono";
import type { NTAuthSession, NTAuthUser } from "@neptrek/db/";

export interface Context extends Env {
  Variables: {
    user: NTAuthUser | null;
    session: NTAuthSession | null;
  };
}
