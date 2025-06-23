import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello" });
});

app.get("/condiments", (c) => {
  const condiments = [
    { id: 1, name: "Sambal Matah" },
    { id: 2, name: "Sambal Bawang" },
    { id: 3, name: "Sambal Hijau" },
    { id: 4, name: "Sambal Pecel" },
    { id: 5, name: "Bawang Merah Goreng" },
    { id: 6, name: "Bawang Putih Goreng" },
  ];

  return c.json(condiments);
});

export default app;
