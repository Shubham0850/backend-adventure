-- CreateTable
CREATE TABLE "MagicItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "power" INTEGER NOT NULL,

    CONSTRAINT "MagicItem_pkey" PRIMARY KEY ("id")
);
