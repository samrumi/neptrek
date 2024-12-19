import { serve } from "@hono/node-server";
import { Hono } from "hono";
import type { SuccessResponse } from "@neptrek/types";

const app = new Hono();
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
