/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `newsletter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `newsletter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newsletter" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_slug_key" ON "newsletter"("slug");
