/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `email` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "feedbacks" DROP CONSTRAINT "feedbacks_project_id_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "feedbacks" DROP COLUMN "project_id",
DROP COLUMN "updatedAt",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
