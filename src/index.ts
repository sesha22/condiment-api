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

app.post("/condiments");

export default app;
