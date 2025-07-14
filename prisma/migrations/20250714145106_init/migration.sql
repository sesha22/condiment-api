-- CreateTable
CREATE TABLE "Condiment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "spicy" TEXT,

    CONSTRAINT "Condiment_pkey" PRIMARY KEY ("id")
);
