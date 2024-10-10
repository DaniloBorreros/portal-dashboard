-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "YearLevel" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FOURTH');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REGULAR', 'IRREGULAR');

-- CreateEnum
CREATE TYPE "Course" AS ENUM ('BSIT', 'BSCS', 'BSED_MATH', 'BSED_ENGLISH', 'BSCRIM', 'BSP', 'BSBM_MM', 'BSBM_HR', 'BSHM');

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "studentNumber" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleInitial" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "sex" "Sex" NOT NULL,
    "photo" TEXT,
    "phone" TEXT,
    "yearLevel" "YearLevel" NOT NULL,
    "course" "Course" NOT NULL,
    "section" TEXT,
    "address" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentNumber_key" ON "Student"("studentNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
