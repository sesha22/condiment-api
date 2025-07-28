import { PrismaClient } from "../src/generated/prisma";

import { dataCondiments } from "../src/data/condiments";

const prisma = new PrismaClient();

async function main() {
  for (const seedCondiment of dataCondiments) {
    const condiment = await prisma.condiment.upsert({
      where: { id: seedCondiment.id },
      update: {},
      create: {
        name: seedCondiment.name,
        spicy: seedCondiment.spicy,
      },
    });

    console.log(`🌶️ Condiment: ${condiment.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
