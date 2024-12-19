import { serve } from "@hono/node-server";
import { Hono } from "hono";
import type { SuccessResponse } from "@neptrek/types";
import type { Context } from "./context";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { appCors } from "./config/cors";

const app = new Hono<Context>().basePath("/api");
app.use("*", logger());
app.use("*", prettyJSON());
app.use("*", appCors);

const PORT = process.env.PORT || 3000;

app.get("/", (c) => {
  const response: SuccessResponse<{ message: string }> = {
    success: true,
    message: "Welcome to Neptrek API",
    data: {
      message: "Server is running successfully!",
    },
  };
  return c.json(response);
});

console.log(`Server is running on port ${PORT}`);
serve({
  fetch: app.fetch,
  port: Number(PORT),
});
