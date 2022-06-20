/*
  Warnings:

  - A unique constraint covering the columns `[symbol]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beneficiary` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supply` to the `Asset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symbol` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "beneficiary" TEXT NOT NULL,
ADD COLUMN     "supply" INTEGER NOT NULL,
ADD COLUMN     "symbol" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_symbol_key" ON "Asset"("symbol");

-- CreateIndex
CREATE UNIQUE INDEX "Asset_address_key" ON "Asset"("address");
