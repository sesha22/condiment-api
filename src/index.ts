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

app.delete("/condiments/:id", async (c) => {
  const id = Number(c.req.param("id"));

  try {
    const deleted = await prisma.condiment.delete({
      where: { id },
    });

    return c.json(deleted);
  } catch (error) {
    return c.json({ error: "Condiment not found" }, 404);
  }
});

app.patch("/condiments/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  try {
    const updated = await prisma.condiment.update({
      where: { id },
      data: {
        name: body.name,
        spicy: body.spicy,
      },
    });

    return c.json(updated);
  } catch (error) {
    return c.json({ error: "Condiment not found or update failed" }, 404);
  }
});

export default app;
