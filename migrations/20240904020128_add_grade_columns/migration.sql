/*
  Warnings:

  - You are about to drop the `grades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "grades" DROP CONSTRAINT "grades_studentId_fkey";

-- DropTable
DROP TABLE "grades";

-- DropTable
DROP TABLE "students";

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleInit" TEXT,
    "lastName" TEXT NOT NULL,
    "Suffix" TEXT,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "studentNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "studentNumber" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleInit" TEXT NOT NULL,
    "subjectCode" TEXT NOT NULL,
    "units" DOUBLE PRECISION NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "grade" DOUBLE PRECISION NOT NULL,
    "reExam" DOUBLE PRECISION,
    "remarks" TEXT,
    "faculty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentNumber_key" ON "Student"("studentNumber");

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
