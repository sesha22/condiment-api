import { Hono } from "hono";
import { dataCondiments } from "./data/condiments";

let condiments = dataCondiments;

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
    return c.json({ message: "Condiment not found" }, 404);
  }

  return c.json(condiment);
});

app.post("/condiments", async (c) => {
  const body = await c.req.json();

  const nextid = condiments[condiments.length - 1].id + 1 || 1;

  const newCondiment = {
    id: nextid,
    ...body,
  };

  const updatedCondiments = [...condiments, newCondiment];

  condiments = updatedCondiments;

  return c.json(newCondiment);
});

export default app;
