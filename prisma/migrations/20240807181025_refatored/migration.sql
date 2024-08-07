-- DropForeignKey
ALTER TABLE "feedbacks" DROP CONSTRAINT "feedbacks_projectId_fkey";

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
