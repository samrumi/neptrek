import { cors } from "hono/cors";

export const appCors = cors({
  origin: ["http://localhost:3000"],
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PUT", "PATCH"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
});
