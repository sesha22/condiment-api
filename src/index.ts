import { Hono } from "hono";
import { condiments } from "./data/condiments";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello" });
});

app.get("/condiments", (c) => {
  return c.json(condiments);
});

app.get("/condiments/:id", (c) => {
  const id = Number(c.req.param("id"));

  const condiment = condiments.find((condiment) => condiment.id == id);

  if (!condiment) {
    return c.json(
      {
        message: "Condiment not found",
      },
      404
    );
  }

  return c.json(condiment);
});

export default app;
