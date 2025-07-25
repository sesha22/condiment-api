import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Condiment API" });
});

app.get("/condiments", async (c) => {
  const condiments = await prisma.condiment.findMany();

  return c.json(condiments);
});

app.get("/condiments/:id", async (c) => {
  const id = Number(c.req.param("id"));

  const condiment = await prisma.condiment.findUnique({
    where: { id },
  });

  return c.json(condiment);
});

// TODO: Continue to implement POST, DELETE, PATCH

app.post("/condiments", async (c) => {
  const body = await c.req.json();

  const condiment = await prisma.condiment.create({
    data: {
      name: body.name,
      spicy: body.spicy,
    },
  });

  return c.json(condiment);
});

app.delete("/condiments/:id");

app.patch("/condiments/:id");

// TODO: Deploy to Render / Railway with new bank card

export default app;
